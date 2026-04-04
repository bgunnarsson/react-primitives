import React__default from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

declare const Popover: React__default.FC<RadixPopover.PopoverProps>;
declare const PopoverTrigger: React__default.ForwardRefExoticComponent<RadixPopover.PopoverTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const PopoverClose: React__default.ForwardRefExoticComponent<RadixPopover.PopoverCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
interface PopoverContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixPopover.Content> {
}
declare const PopoverContent: React__default.ForwardRefExoticComponent<PopoverContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { Popover, PopoverClose, PopoverContent, type PopoverContentProps, PopoverTrigger };
