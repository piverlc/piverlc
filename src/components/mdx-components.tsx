import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { highlight } from 'sugar-high';

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  a: CustomLink,
  Image: RoundedImage,
};

export default function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor'],
                },
              },
            ],
          ],
        },
      }}
    />
  );
}
