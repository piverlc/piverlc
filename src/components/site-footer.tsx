import Image from 'next/image';
import { siteConfig } from '~/config/site';
import Container from './container';

export default function SiteFooter() {
  return (
    <footer className='fixed bottom-0 my-6 w-full text-gray-500'>
      <Container>
        <div className='flex items-center space-x-1'>
          <p>&copy; 2023 Piverlc</p>
        </div>
        <a
          target='_blank'
          rel='noreferrer'
          className='mx-2'
          title={`${siteConfig.links.x.title}`}
          href={`${siteConfig.links.x.href}`}
        >
          <Image
            priority
            width={18}
            height={18}
            src={'/x-twitter.svg'}
            alt={`${siteConfig.links.x.title}`}
          />
          <span className='sr-only'>{`${siteConfig.links.x.title}`}</span>
        </a>
      </Container>
    </footer>
  );
}
