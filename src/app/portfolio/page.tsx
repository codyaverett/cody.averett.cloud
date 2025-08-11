"use client";

import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
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
        <div className="card">
          <h3>Project 4</h3>
          <p>A brief description of the project.</p>
          <Link href="/portfolio/project-4">View Project</Link>
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}
