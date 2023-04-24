'use client';

import { useTheme } from '@wits/next-themes';
import { Icons } from '~/utils/Icons';
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

const ToggleTheme = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='sm'>
            <Icons.sun className='h-6 w-6 rotate-0 scale-100 fill-current transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
            <Icons.moon className='absolute h-6 w-6 rotate-90 scale-0 fill-current transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
            <span className='sr-only'>{`Toggle theme`}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className='cursor-pointer'
            >
              <Icons.sun className='mr-2 h-4 w-4' />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')} className='cursor-pointer'>
              <Icons.moon className='mr-2 h-4 w-4' />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('system')}
              className='cursor-pointer'
            >
              <Icons.laptop className='mr-2 h-4 w-4' />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  );
};

export default ToggleTheme;
