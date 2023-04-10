import './globals.css';

export const metadata = {
  title: 'Blog WIP',
  description: 'Blog by piverlc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
