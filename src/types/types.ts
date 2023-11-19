export type BlogPostMetadata = {
  title: string;
  date: string;
  description: string;
} & { [x: string]: any };

export type BlogPost = {
  metadata: BlogPostMetadata;
  content: string;
  slug: string;
};

export interface PageProps {
  params: {
    slug: string[];
  };
}

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Path = '/' | '/blog' | 'github' | 'x';

export type PathConfig = {
  href: string;
  title: string;
  isExternal: boolean;
};

export type SiteConfig = Prettify<{
  links: Prettify<Record<Path, Prettify<PathConfig>>>;
}>;
