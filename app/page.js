import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

// Next.js App Router soporta async components para cargar datos
export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mi Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link> - {date}
          </li>
        ))}
      </ul>
    </div>
  );
}
