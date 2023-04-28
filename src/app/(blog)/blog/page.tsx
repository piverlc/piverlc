import { allDocuments } from 'contentlayer/generated';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className='mb-5 font-serif text-3xl font-bold'>Blog</h1>
      {allDocuments
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slugAsPath}
            href={`/blog${post.slugAsPath}`}
            className='mb-4 flex flex-col space-y-1'
          >
            <div className='flex w-full flex-col'>
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
