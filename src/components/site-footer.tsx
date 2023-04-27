import { siteConfig } from '~/config/site';
import { Icons } from '~/utils/Icons';
import Container from './container';

const SiteFooter = () => {
  return (
    <footer className='fixed bottom-0 my-6 w-full text-gray-500'>
      <Container>
        <div className='flex items-center space-x-1'>
          <p>&copy; 2023 piverlc</p>
        </div>
        <a
          target='_blank'
          rel='noreferrer'
          className='mx-2'
          title={`${siteConfig.links.twitter.title}`}
          href={`${siteConfig.links.twitter.href}`}
        >
          <Icons.twitter className='h-6 w-6 transition-colors duration-100 hover:text-light' />
          <span className='sr-only'>{`${siteConfig.links.twitter.title}`}</span>
        </a>
      </Container>
    </footer>
  );
};

export default SiteFooter;
