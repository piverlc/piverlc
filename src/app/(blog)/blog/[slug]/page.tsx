import { allExamples } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import MDx from '~/components/MDX';
import { getPostFromParam } from '~/utils/getPostFromParams';

export const dynamicParams = false;

export function generateStaticParams() {
  return allExamples.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostFromParam(params.slug);

  if (!post) {
    return {};
  }

  return { title: post.title };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPostFromParam(params.slug);

  if (!post) {
    console.log('if');
    notFound();
  }

  return (
    <section>
      <h1 className='max-w-[650px] font-serif text-3xl font-bold'>{post.title}</h1>
      <MDx key={post.slugAsParams} code={post.body.code} />
    </section>
  );
}
