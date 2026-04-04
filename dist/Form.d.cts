import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface FormFieldProps extends React__default.HTMLAttributes<HTMLDivElement> {
    id?: string;
    error?: string;
}
declare const FormField: ({ id: idProp, error, children, className, ...props }: FormFieldProps) => react_jsx_runtime.JSX.Element;
interface FormLabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const FormLabel: React__default.ForwardRefExoticComponent<FormLabelProps & React__default.RefAttributes<HTMLLabelElement>>;
interface FormControlProps extends React__default.HTMLAttributes<HTMLElement> {
}
/** Slot wrapper — renders its child and injects `id`, `aria-invalid`, `aria-describedby` from FormField context */
declare const FormControl: React__default.ForwardRefExoticComponent<FormControlProps & React__default.RefAttributes<HTMLElement>>;
interface FormMessageProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const FormMessage: React__default.ForwardRefExoticComponent<FormMessageProps & React__default.RefAttributes<HTMLParagraphElement>>;

export { FormControl, type FormControlProps, FormField, type FormFieldProps, FormLabel, type FormLabelProps, FormMessage, type FormMessageProps };
