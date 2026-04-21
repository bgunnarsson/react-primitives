import React__default from 'react';

interface TagInputProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (tags: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    addOnKeys?: string[];
    allowDuplicates?: boolean;
    maxTags?: number;
    inputClassName?: string;
    inputStyle?: React__default.CSSProperties;
    renderTag?: (tag: string, index: number, remove: () => void) => React__default.ReactNode;
}
declare const TagInput: React__default.ForwardRefExoticComponent<TagInputProps & React__default.RefAttributes<HTMLDivElement>>;

export { TagInput, type TagInputProps };
