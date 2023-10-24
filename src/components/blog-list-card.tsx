import { type DocumentTypes } from 'contentlayer/generated';
import Link from 'next/link';
import { formatDate } from '~/utils/formatDate';

export type BlogListCardProps = {
  post: DocumentTypes;
};

const BlogListCard = ({ post }: BlogListCardProps) => {
  return (
    <article className='my-5 flex h-full w-full flex-1 flex-col justify-between rounded-2xl border border-[#e5e7eb] p-5 leading-relaxed sm:p-5'>
      <h2 className='mb-1 h-fit w-fit text-2xl font-bold'>
        <Link
          href={`/blog${post.slugAsPath}`}
          className='flex items-center hover:text-link-secondary'
        >
          {post.title}
        </Link>
      </h2>
      <p className='my-2 text-lg text-[#B4B4B4]'>{formatDate(post.date)}</p>
      <p className='my-2 whitespace-pre-wrap text-base'>{post.description}</p>
      <p className='my-2 h-fit w-fit text-base text-link-primary hover:text-link-secondary'>
        <Link href={`/blog${post.slugAsPath}`}>Read More</Link>
      </p>
    </article>
  );
};

export default BlogListCard;
