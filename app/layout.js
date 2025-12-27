import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mi Blog con Markdown',
  description: 'Blog hecho con Next.js y Markdown',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        <header style={{ padding: '1rem', background: '#f0f0f0' }}>
          <nav>
            <Link href="/">🏠 Home</Link>
          </nav>
        </header>

        <main style={{ padding: '2rem' }}>{children}</main>

        <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
          © 2025 Mi Blog
        </footer>
      </body>
    </html>
  );
}
