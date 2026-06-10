import React__default from 'react';

interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'style'> {
    inputClassName?: string;
    placeholderClassName?: string;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

export { Input, type InputProps };
