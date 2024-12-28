'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';
import { cn } from '~/utils/cn';
import { Icons } from './icons';

/**
 * Dropdown Menu
 *
 * Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu
 */
export const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * Trigger
 *
 * The button that toggles the dropdown menu.
 * By default, the DropdownMenu.Content will position itself against the trigger.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#trigger
 */
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * Group
 *
 * Used to group multiple DropdownMenu.Items.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#group
 */
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * Portal
 *
 * When used, portals the content part into the body.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#portal
 */
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * Sub
 *
 * Contains all the parts of a submenu.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#sub
 */
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * RadioGroup
 *
 * Used to group multiple DropdownMenu.RadioItems.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#radiogroup
 */
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * SubTrigger
 *
 * An item that opens a submenu. Must be rendered inside DropdownMenu.Sub.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#subtrigger
 */
export const DropdownMenuSubTrigger = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700',
      inset && 'pl-8',
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <Icons.chevronRight className='ml-auto size-4' />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * SubContent
 *
 * The component that pops out when a submenu is open. Must be rendered inside DropdownMenu.Sub.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#subcontent
 */
export const DropdownMenuSubContent = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      'animate-in slide-in-from-left-1',
      'z-50 min-w-32 overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

/**
 * Content
 *
 * The component that pops out when the dropdown menu is open.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#content
 */
export const DropdownMenuContent = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        'animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'z-50 m-3 min-w-32 overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
        className
      )}
      sideOffset={sideOffset}
      ref={ref}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * Item
 *
 * The component that contains the dropdown menu items.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#item
 */
export const DropdownMenuItem = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      inset && 'pl-8',
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * CheckboxItem
 *
 * An item that can be controlled and rendered like a checkbox.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#checkboxitem
 */
export const DropdownMenuCheckboxItem = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      className
    )}
    checked={checked}
    ref={ref}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icons.check className='size-4' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * RadioItem
 *
 * An item that can be controlled and rendered like a radio.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#radioitem
 */
export const DropdownMenuRadioItem = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      className
    )}
    ref={ref}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icons.circle className='size-2 fill-current' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * Label
 *
 * Used to render a label. It won't be focusable using arrow keys.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#label
 */
export const DropdownMenuLabel = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300',
      inset && 'pl-8',
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * Separator
 *
 * Used to visually separate items in the dropdown menu.
 *
 * @link https://www.radix-ui.com/docs/primitives/components/dropdown-menu#separator
 */
export const DropdownMenuSeparator = forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700', className)}
    ref={ref}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-slate-500', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
