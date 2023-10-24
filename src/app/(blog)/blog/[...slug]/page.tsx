import { allDocuments } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MDX from '~/components/mdx-components';
import type { PageProps } from '~/types/types';

export const dynamicParams = false;

export async function generateStaticParams() {
  return allDocuments.map((doc) => ({
    slug: doc.slugAsPath.replace('/', '').split('/'),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const doc = await getAllDocsFromParams(params);

  if (!doc) {
    return {};
  }

  return { title: doc.title, description: doc.description };
}

export default async function Blog({ params }: PageProps) {
  const doc = await getAllDocsFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <section>
      <h1 className='max-w-[650px] font-serif text-3xl font-bold'>{doc.title}</h1>
      <MDX key={doc.slugAsSegments} code={doc.body.code} />
    </section>
  );
}

async function getAllDocsFromParams(params: PageProps['params']) {
  const slug = params.slug.join('/');
  const doc = allDocuments.find((doc) => doc.slugAsPath === `/${slug}`);

  if (!doc) {
    return null;
  }

  return doc;
}
