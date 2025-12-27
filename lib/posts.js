import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });
}

export async function getPostData(id) {
  if (!id) {
    throw new Error('Post id is required');
  }
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found for id "${id}"`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const contentHtml = (await remark().use(html).process(matterResult.content)).toString();
  return { id, contentHtml, ...matterResult.data };
}
