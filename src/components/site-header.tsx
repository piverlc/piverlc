'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '~/config/site';
import type { Path } from '~/types/types';
import { cn } from '~/utils/cn';
import { Icons } from './icons';

export default function SiteHeader() {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className='mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <LayoutGroup>
          <nav
            className='relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto'
            id='nav'
          >
            <div className='flex flex-row space-x-0 pr-10'>
              {Object.entries(siteConfig.links).map(
                ([path, { isExternal, title, href }]) => {
                  const isActive = path === pathname;
                  const externalHref = siteConfig.links[path as Path].href;
                  const externalTitle = siteConfig.links[path as Path].title;
                  return (
                    <Link
                      key={path}
                      target={isExternal ? '_blank' : '_self'}
                      href={isExternal ? externalHref : href}
                      title={isExternal ? externalTitle : title}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'flex align-middle text-link-primary transition-all hover:text-link-secondary',
                        {
                          'text-neutral-500': !isActive,
                          'font-semibold': isActive,
                        }
                      )}
                    >
                      {isExternal ? (
                        <div className='mx-2 flex items-center'>
                          <Icons.arrow />
                          <span className='px-2 py-1'>{externalTitle}</span>
                        </div>
                      ) : (
                        <span className='relative mr-2 py-1 pr-2'>
                          {title}
                          {isActive ? (
                            <motion.div
                              className='absolute inset-0 top-7 z-[-1] mx-2 h-px bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r'
                              layoutId='navbar'
                              transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </span>
                      )}
                    </Link>
                  );
                }
              )}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}
