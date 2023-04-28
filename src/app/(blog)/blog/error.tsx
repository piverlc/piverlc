'use client';
import { useEffect } from 'react';
import { Button } from '~/components/ui/button';

// // TODO: improve as per application grows
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <div className='space-y-4'>
      <h2 className='text-lg font-bold text-light'>Something went wrong! Error</h2>
      <p className='text-sm text-light'>{error?.message}</p>
      <Button onClick={() => reset()} variant='outline'>
        Try Again
      </Button>
    </div>
  );
}
