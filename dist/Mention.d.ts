import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

type MentionInputElement = HTMLInputElement | HTMLTextAreaElement;
interface MentionInputProps {
    ref: React__default.RefCallback<MentionInputElement>;
    value: string;
    onChange: (e: React__default.ChangeEvent<MentionInputElement>) => void;
    onKeyDown: (e: React__default.KeyboardEvent<MentionInputElement>) => void;
    onKeyUp: (e: React__default.KeyboardEvent<MentionInputElement>) => void;
    onClick: (e: React__default.MouseEvent<MentionInputElement>) => void;
    onBlur: (e: React__default.FocusEvent<MentionInputElement>) => void;
}
interface MentionListProps {
    role: 'listbox';
    onMouseDown: (e: React__default.MouseEvent) => void;
}
interface MentionItemProps {
    role: 'option';
    'aria-selected': boolean;
    'data-active': true | undefined;
    onMouseEnter: () => void;
    onMouseDown: (e: React__default.MouseEvent) => void;
    onClick: () => void;
}
interface MentionRenderProps<T> {
    open: boolean;
    query: string;
    activeIndex: number;
    setActiveIndex: (i: number) => void;
    selectItem: (item: T) => void;
    close: () => void;
    getInputProps: () => MentionInputProps;
    getListProps: () => MentionListProps;
    getItemProps: (args: {
        index: number;
        item: T;
    }) => MentionItemProps;
}
interface MentionProps<T> {
    trigger?: string;
    value: string;
    onValueChange: (value: string) => void;
    items: T[];
    onQueryChange?: (query: string) => void;
    format: (item: T) => string;
    appendSpace?: boolean;
    onSelect?: (item: T) => void;
    children: (api: MentionRenderProps<T>) => React__default.ReactNode;
}
declare function Mention<T>({ trigger, value, onValueChange, items, onQueryChange, format, appendSpace, onSelect, children, }: MentionProps<T>): react_jsx_runtime.JSX.Element;

export { Mention, type MentionProps, type MentionRenderProps };
