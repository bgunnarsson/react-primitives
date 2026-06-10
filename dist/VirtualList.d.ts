import React__default from 'react';

interface VirtualListItem {
    index: number;
    start: number;
    size: number;
}
interface VirtualListRenderProps<T> {
    item: T;
    index: number;
    /** Inline style positioning the row absolutely within the inner spacer. Spread it onto your row. */
    style: React__default.CSSProperties;
}
interface VirtualListProps<T> extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'children'> {
    items: readonly T[];
    /** Pixel height of each row. Pass a function for variable heights. */
    itemSize: number | ((index: number) => number);
    /** Renders a single row. The returned element should spread `style` to position itself. */
    children: (props: VirtualListRenderProps<T>) => React__default.ReactNode;
    /** Extra rows to render above/below the visible window. */
    overscan?: number;
    /** Required when no fixed CSS height is set on the scroller. */
    height?: number | string;
    /** Stable key for each item (defaults to index). */
    getItemKey?: (item: T, index: number) => React__default.Key;
    /** Direction to virtualize. `vertical` is the default. */
    orientation?: 'vertical' | 'horizontal';
}
declare const VirtualList: <T>(props: VirtualListProps<T> & {
    ref?: React__default.Ref<HTMLDivElement>;
}) => React__default.ReactElement;

export { VirtualList, type VirtualListItem, type VirtualListProps, type VirtualListRenderProps };
