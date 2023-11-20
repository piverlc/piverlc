import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CustomMDX from '~/components/mdx-components';
import type { PageProps } from '~/types/types';
import { getBlogPosts } from '~/utils/blog';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getBlogPosts()).map((blogPost) => ({
    slug: [blogPost.slug],
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const blogPost = await getAllBlogPostsFromParams(params);

  if (!blogPost) {
    return {};
  }

  return { title: blogPost.metadata.title, description: blogPost.metadata.description };
}

export default async function Blog({ params }: PageProps) {
  const blogPost = await getAllBlogPostsFromParams(params);

  if (!blogPost) {
    notFound();
  }

  return (
    <section>
      <h1 className='title max-w-[650px] text-2xl font-semibold tracking-tighter'>
        {blogPost.metadata.title}
      </h1>
      <article className='prose prose-neutral prose-quoteless dark:prose-invert'>
        <CustomMDX source={blogPost.content} />
      </article>
    </section>
  );
}

async function getAllBlogPostsFromParams(params: PageProps['params']) {
  const slug = params.slug.join('/');
  const blogPost = (await getBlogPosts()).find((blogPost) => blogPost.slug === `${slug}`);

  if (!blogPost) {
    return null;
  }

  return blogPost;
}
