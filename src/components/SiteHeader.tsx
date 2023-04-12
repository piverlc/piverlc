'use client';

import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { siteConfig } from '~/config/site';
import { cn } from '~/utils/cn';
import ToggleTheme from './ToggleTheme';
import { Button } from './ui/Button';

const SiteHeader = () => {
  return (
    <header
      className={cn(
        'sticky top-0 z-[1100] col-span-full mx-auto w-full max-w-full',
        'bg-white dark:border-b-slate-700 dark:bg-slate-950',
        'divide-gray-50 border-b border-b-slate-200'
      )}
    >
      <div className='flex h-16 flex-row items-center justify-between p-5'>
        <div>
          <Link href='/' className='items-center space-x-2' title='logo'>
            <span className='text-4xl text-slate-950 transition-all dark:text-slate-50'>
              {'P'}
            </span>
          </Link>
        </div>

        <div>
          <nav>
            <Link
              title={`${siteConfig.links.github.title}`}
              href={`${siteConfig.links.github.href}`}
              target='_blank'
              rel='noreferrer'
            >
              <Button variant='ghost' size='sm'>
                <GitHubLogoIcon className='h-6 w-6 fill-current transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
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
                <TwitterLogoIcon className='h-6 w-6 fill-current transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100' />
                <span className='sr-only'>{`${siteConfig.links.twitter.title}`}</span>
              </Button>
            </Link>

            <ToggleTheme />
          </nav>
        </div>
      </div>
    </header>
  );
};
export default SiteHeader;
