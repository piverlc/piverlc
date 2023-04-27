import type { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='container mx-auto flex items-center justify-between px-4 md:px-0'>
      {children}
    </section>
  );
};

export default Container;
