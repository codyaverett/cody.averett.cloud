"use client";

import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
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
      <style jsx>{`
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
