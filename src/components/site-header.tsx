'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, siteConfig } from '~/config/site';
import { cn } from '~/utils/cn';
import { Icons } from '~/utils/icons';
import Container from './container';

export default function SiteHeader() {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className='sticky top-0 z-40 w-full py-4'>
      <Container>
        <Link href='/' className='items-center space-x-2' title='logo'>
          <span className='text-5xl text-light transition-all hover:text-gray-300'>
            {'P'}
          </span>
        </Link>

        <LayoutGroup>
          <nav className='hidden sm:flex' id='nav'>
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    'flex align-middle font-medium transition-all hover:text-gray-300',
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
                        className='absolute inset-0 z-[-1] rounded-md bg-neutral-800'
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

        <nav>
          <a
            target='_blank'
            rel='noreferrer'
            title={`${siteConfig.links.github.title}`}
            href={`${siteConfig.links.github.href}`}
          >
            <Icons.github className='h-6 w-6 transition-all duration-100 hover:text-gray-300' />
            <span className='sr-only'>{`${siteConfig.links.github.title}`}</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
