import React__default from 'react';

interface SearchInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'defaultValue'> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    onClear?: () => void;
    icon?: React__default.ReactNode;
    clearLabel?: React__default.ReactNode;
    clearAriaLabel?: string;
    hideClearWhenEmpty?: boolean;
    inputClassName?: string;
    inputStyle?: React__default.CSSProperties;
    iconClassName?: string;
    iconStyle?: React__default.CSSProperties;
    clearClassName?: string;
    clearStyle?: React__default.CSSProperties;
}
declare const SearchInput: React__default.ForwardRefExoticComponent<SearchInputProps & React__default.RefAttributes<HTMLInputElement>>;

export { SearchInput, type SearchInputProps };
