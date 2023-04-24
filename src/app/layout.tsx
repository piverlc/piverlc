import { ServerThemeProvider } from '@wits/next-themes';
import { Inter as FontSans } from 'next/font/google';
import ProviderWrapper from '~/components/ProviderWrapper';
import SiteHeader from '~/components/SiteHeader';
import TailwindIndicator from '~/components/TailwindIndicator';
import { cn } from '~/utils/cn';
import './globals.css';

export const metadata = {
  title: {
    default: 'Piverlc',
    template: '%s | Piverlc',
  },
  description: 'Blog by piverlc',
  icons: {
    icon: '/favicon.ico',
  },
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

// * The ServerThemeProvider component is used to ensure that the correct
// * theme is applied on the server-side. It is not required on the client-side.
// * It wraps the html element and takes an attribute prop which is the attribute
// * that will be used to set the theme class on the html element.
// * The default value is "class".
// * The theme class will be applied to the html element on the server-side
// * and then removed on the client-side to prevent a flash of unstyled content.

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ServerThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <html lang='en' className={cn(fontSans.variable)}>
        <body
          className={cn(
            'min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-white'
          )}
        >
          <ProviderWrapper>
            <SiteHeader />
            <main className='flex-auto'>{children}</main>
            <TailwindIndicator />
          </ProviderWrapper>
        </body>
      </html>
    </ServerThemeProvider>
  );
}