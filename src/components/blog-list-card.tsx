import Link from 'next/link';
import type { BlogPost } from '~/types/types';
import { formatDate } from '~/utils/formatDate';

export type BlogListCardProps = {
  blogPost: BlogPost;
};

const BlogListCard = ({ blogPost }: BlogListCardProps) => {
  return (
    <article className='my-5 flex h-fit w-full flex-1 flex-col justify-between rounded-2xl border p-5 leading-relaxed sm:p-5'>
      <h2 className='mb-1 size-fit text-2xl font-bold'>
        <Link
          href={`/blog/${blogPost.slug}`}
          className='flex items-center hover:text-link-secondary'
        >
          {blogPost.metadata.title}
        </Link>
      </h2>
      <p className='my-2 text-lg text-[#B4B4B4]'>{formatDate(blogPost.metadata.date)}</p>
      <p className='my-2 whitespace-pre-wrap text-base'>
        {blogPost.metadata.description}
      </p>
      <p className='my-2 size-fit text-base text-link-primary hover:text-link-secondary'>
        <Link href={`/blog/${blogPost.slug}`}>Read More</Link>
      </p>
    </article>
  );
};

export default BlogListCard;
