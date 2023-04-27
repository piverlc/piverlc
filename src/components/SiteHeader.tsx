'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, siteConfig } from '~/config/site';
import { Icons } from '~/utils/Icons';
import { cn } from '~/utils/cn';
import { Button } from './ui/Button';

const SiteHeader = () => {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-[1100] col-span-full mx-auto w-full max-w-full',
        'bg-white dark:border-b-slate-700 dark:bg-slate-950',
        'divide-gray-50 border-b border-b-slate-200'
      )}
    >
      <div className='flex h-16 flex-row items-center justify-between p-5'>
        <LayoutGroup>
          <Link href='/' className='items-center space-x-2' title='logo'>
            <span className='text-5xl text-slate-950 transition-all dark:text-slate-50'>
              {'P'}
            </span>
          </Link>
        </LayoutGroup>

        <LayoutGroup>
          <nav className='flex' id='nav'>
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    'flex align-middle font-medium transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                    {
                      'text-neutral-500': !isActive,
                      'font-semibold': isActive,
                    }
                  )}
                  title={name}
                >
                  <span className='relative px-[10px] py-[5px]'>
                    {name}
                    {path === pathname ? (
                      <motion.div
                        className='absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800'
                        layoutId='sidebar'
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        <LayoutGroup>
          <nav>
            <Link
              title={`${siteConfig.links.github.title}`}
              href={`${siteConfig.links.github.href}`}
              target='_blank'
              rel='noreferrer'
            >
              <Button variant='ghost' size='sm'>
                <Icons.github className='h-6 w-6 fill-current transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
                <span className='sr-only'>{`${siteConfig.links.github.title}`}</span>
              </Button>
            </Link>

            <Link
              title={`${siteConfig.links.twitter.title}`}
              href={`${siteConfig.links.twitter.href}`}
              target='_blank'
              rel='noreferrer'
              className='mx-2'
            >
              <Button variant='ghost' size='sm'>
                <Icons.twitter className='h-6 w-6 fill-current transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
                <span className='sr-only'>{`${siteConfig.links.twitter.title}`}</span>
              </Button>
            </Link>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
};
export default SiteHeader;
