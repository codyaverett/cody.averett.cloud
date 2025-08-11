"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Cody Averett</h1>
          <p className="subtitle">Software Engineer & Web Developer</p>
          <p>I build modern, responsive, and performant web applications.</p>
          <Link href="/portfolio" className="button primary">View My Work</Link>
        </div>
      </section>

      <section className="container">
        <h2>Featured Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Project 1</h3>
            <p>A brief description of the project.</p>
            <Link href="/portfolio/project-1">View Project</Link>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>A brief description of the project.</p>
            <Link href="/portfolio/project-2">View Project</Link>
          </div>
          <div className="card">
            <h3>Project 3</h3>
            <p>A brief description of the project.</p>
            <Link href="/portfolio/project-3">View Project</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Recent Blog Posts</h2>
        <div className="list">
          <div className="list-item">
            <h3><Link href="/blog/post-1">Blog Post Title 1</Link></h3>
            <p>A short excerpt of the blog post.</p>
          </div>
          <div className="list-item">
            <h3><Link href="/blog/post-2">Blog Post Title 2</Link></h3>
            <p>A short excerpt of the blog post.</p>
          </div>
          <div className="list-item">
            <h3><Link href="/blog/post-3">Blog Post Title 3</Link></h3>
            <p>A short excerpt of the blog post.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 4rem 0;
          background: var(--background);
        }
        .subtitle {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }
        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
        }
        .primary {
          background: var(--primary);
          color: #fff;
        }
        .primary:hover {
          background: #005bb5;
        }
        h2 {
          margin-bottom: 2rem;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .card {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          transition: box-shadow 0.2s;
        }
        .card:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .card h3 {
          margin-bottom: 0.5rem;
        }
        .list-item {
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 0;
        }
        .list-item:last-child {
          border-bottom: none;
        }
        .list-item h3 a {
          text-decoration: none;
          color: var(--foreground);
        }
        .list-item h3 a:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
