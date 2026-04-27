import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface EditableProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    onCancel?: () => void;
    editing?: boolean;
    defaultEditing?: boolean;
    onEditingChange?: (editing: boolean) => void;
    disabled?: boolean;
    placeholder?: string;
    selectAllOnEdit?: boolean;
    submitOnBlur?: boolean;
    submitOnEnter?: boolean;
    cancelOnEscape?: boolean;
}
declare const Editable: React__default.ForwardRefExoticComponent<EditableProps & React__default.RefAttributes<HTMLDivElement>>;
interface EditablePreviewProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const EditablePreview: React__default.ForwardRefExoticComponent<EditablePreviewProps & React__default.RefAttributes<HTMLSpanElement>>;
interface EditableInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
}
declare const EditableInput: React__default.ForwardRefExoticComponent<EditableInputProps & React__default.RefAttributes<HTMLInputElement>>;
interface EditableTextareaProps extends Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> {
}
declare const EditableTextarea: React__default.ForwardRefExoticComponent<EditableTextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;
interface EditableControlsProps {
    children: (api: {
        editing: boolean;
        startEdit: () => void;
        submit: () => void;
        cancel: () => void;
    }) => React__default.ReactNode;
}
declare const EditableControls: ({ children }: EditableControlsProps) => react_jsx_runtime.JSX.Element;

export { Editable, EditableControls, type EditableControlsProps, EditableInput, type EditableInputProps, EditablePreview, type EditablePreviewProps, type EditableProps, EditableTextarea, type EditableTextareaProps };
