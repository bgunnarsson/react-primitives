import React__default from 'react';
import * as RadixHoverCard from '@radix-ui/react-hover-card';

declare const HoverCard: React__default.FC<RadixHoverCard.HoverCardProps>;
declare const HoverCardTrigger: React__default.ForwardRefExoticComponent<RadixHoverCard.HoverCardTriggerProps & React__default.RefAttributes<HTMLAnchorElement>>;
interface HoverCardContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixHoverCard.Content> {
}
declare const HoverCardContent: React__default.ForwardRefExoticComponent<HoverCardContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { HoverCard, HoverCardContent, type HoverCardContentProps, HoverCardTrigger };
