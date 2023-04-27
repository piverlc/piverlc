import { allExamples } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import MDx from '~/components/MDX';
import { getPostFromParam } from '~/utils/getPostFromParam';

export const dynamicParams = false;

export async function generateStaticParams() {
  return allExamples.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getPostFromParam(params.slug);

  if (!post) {
    return {};
  }

  return { title: post.title, description: post.description };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = getPostFromParam(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className='max-w-[650px] font-serif text-3xl font-bold'>{post.title}</h1>
      <MDx key={post.slugAsParams} code={post.body.code} />
    </section>
  );
}
