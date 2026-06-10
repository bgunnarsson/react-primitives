import React__default from 'react';

interface PasswordInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    visible?: boolean;
    defaultVisible?: boolean;
    onVisibilityChange?: (visible: boolean) => void;
    toggleLabel?: (visible: boolean) => React__default.ReactNode;
    toggleAriaLabel?: (visible: boolean) => string;
    inputClassName?: string;
    toggleClassName?: string;
    className?: string;
    style?: React__default.CSSProperties;
}
declare const PasswordInput: React__default.ForwardRefExoticComponent<PasswordInputProps & React__default.RefAttributes<HTMLInputElement>>;

export { PasswordInput, type PasswordInputProps };
