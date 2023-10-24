import { siteConfig } from '~/config/site';

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
