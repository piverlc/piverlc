import { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '~/utils/cn';

type C = {
  [Key: string]: ({
    className,
    ...props
  }: {
    className?: string | undefined;
  }) => JSX.Element;
};

// TODO: add html & styles
const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)}
      {...props}
    />
  ),
} satisfies C;

type MDxProps = {
  code: string;
};

const MDx = ({ code }: MDxProps) => {
  const Component = useMDXComponent(code);
  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
};

export default MDx;
