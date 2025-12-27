import fs from 'fs';
import path from 'path';
import { getPostData } from '../../../lib/posts';

const postsDirectory = path.join(process.cwd(), 'posts');

/* 1️⃣ Le dice a Next qué posts existen */
export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);

  return files.map(file => ({
    id: file.replace(/\.md$/, ''),
  }));
}

/* 2️⃣ Página del post */
export default async function Post({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
