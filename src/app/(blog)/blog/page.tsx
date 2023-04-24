import { allExamples } from 'contentlayer/generated';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
};

const BlogPage = () => {
  return (
    <section>
      <h1 className='mb-5 font-serif text-3xl font-bold'>Blog</h1>
      {allExamples
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slugAsParams}
            href={`/blog/${post.slugAsParams}`}
            className='mb-4 flex flex-col space-y-1'
          >
            <div className='flex w-full flex-col'>
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default BlogPage;