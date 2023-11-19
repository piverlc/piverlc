import BlogListCard from '~/components/blog-list-card';
import { getBlogPosts } from '~/utils/blog';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return (
    <section>
      <h1 className='mb-5 font-serif text-3xl font-bold'>Blog</h1>
      {blogPosts
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .map((blogPost) => (
          <BlogListCard key={blogPost.slug} blogPost={blogPost} />
        ))}
    </section>
  );
}
