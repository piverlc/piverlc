import { allDocuments } from 'contentlayer/generated';
import BlogListCard from '~/components/blog-list-card';

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
          <BlogListCard key={post.slugAsSegments} post={post} />
        ))}
    </section>
  );
}
