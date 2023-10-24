
import type { SiteConfig } from '~/types/types';

export const siteConfig = {
  links: {
    github: { href: 'https://github.com/piverlc', title: 'Github' },
    x: { href: 'https://x.com/piverlc', title: 'X' },
  },
};

export const siteConfig: SiteConfig = {
  links: {
    '/': {
      href: '/',
      title: 'Home',
      isExternal: false,
    },
    '/blog': {
      href: '/blog',
      title: 'Blog',
      isExternal: false,
    },
    github: {
      href: 'https://github.com/piverlc',
      title: 'Github',
      isExternal: true,
    },
    x: {
      href: 'https://x.com/piverlc',
      title: 'X',
      isExternal: true,
    },
  },
};
