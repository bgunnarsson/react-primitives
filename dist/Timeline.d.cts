import React__default from 'react';

type Orientation = 'vertical' | 'horizontal';
interface TimelineProps extends React__default.HTMLAttributes<HTMLOListElement> {
    orientation?: Orientation;
}
declare const Timeline: React__default.ForwardRefExoticComponent<TimelineProps & React__default.RefAttributes<HTMLOListElement>>;
interface TimelineItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
    state?: 'past' | 'current' | 'future' | 'default';
}
declare const TimelineItem: React__default.ForwardRefExoticComponent<TimelineItemProps & React__default.RefAttributes<HTMLLIElement>>;
interface TimelineIndicatorProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const TimelineIndicator: React__default.ForwardRefExoticComponent<TimelineIndicatorProps & React__default.RefAttributes<HTMLSpanElement>>;
interface TimelineConnectorProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const TimelineConnector: React__default.ForwardRefExoticComponent<TimelineConnectorProps & React__default.RefAttributes<HTMLSpanElement>>;
interface TimelineContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const TimelineContent: React__default.ForwardRefExoticComponent<TimelineContentProps & React__default.RefAttributes<HTMLDivElement>>;
interface TimelineTitleProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}
declare const TimelineTitle: React__default.ForwardRefExoticComponent<TimelineTitleProps & React__default.RefAttributes<HTMLElement>>;
interface TimelineDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const TimelineDescription: React__default.ForwardRefExoticComponent<TimelineDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface TimelineTimeProps extends React__default.TimeHTMLAttributes<HTMLTimeElement> {
}
declare const TimelineTime: React__default.ForwardRefExoticComponent<TimelineTimeProps & React__default.RefAttributes<HTMLTimeElement>>;

export { Timeline, TimelineConnector, type TimelineConnectorProps, TimelineContent, type TimelineContentProps, TimelineDescription, type TimelineDescriptionProps, TimelineIndicator, type TimelineIndicatorProps, TimelineItem, type TimelineItemProps, type TimelineProps, TimelineTime, type TimelineTimeProps, TimelineTitle, type TimelineTitleProps };
