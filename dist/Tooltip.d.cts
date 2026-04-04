import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps extends React__default.ComponentPropsWithoutRef<typeof RadixTooltip.Root> {
    delayDuration?: number;
}
declare const Tooltip: ({ delayDuration, children, ...props }: TooltipProps) => react_jsx_runtime.JSX.Element;
declare const TooltipTrigger: React__default.ForwardRefExoticComponent<RadixTooltip.TooltipTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixTooltip.Content> {
}
declare const TooltipContent: React__default.ForwardRefExoticComponent<TooltipContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { Tooltip, TooltipContent, type TooltipContentProps, type TooltipProps, TooltipTrigger };
