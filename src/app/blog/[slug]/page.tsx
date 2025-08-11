'use client';

import { usePathname } from 'next/navigation';

export default function BlogPost() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is a placeholder for the blog post content.</p>
    </div>
  );
}
