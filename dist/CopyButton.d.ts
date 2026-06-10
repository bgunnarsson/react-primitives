import React__default from 'react';

interface CopyButtonRenderState {
    copied: boolean;
    copy: () => Promise<void>;
    error: Error | null;
}
interface CopyButtonProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onCopy' | 'onError'> {
    /** Text to copy to the clipboard. Either `value` or `getValue` is required. */
    value?: string;
    /** Lazily resolves the value when the button is pressed (useful for large or async sources). */
    getValue?: () => string | Promise<string>;
    /** How long the copied state stays true (ms). */
    resetMs?: number;
    /** Called after a successful copy. */
    onCopy?: (value: string) => void;
    /** Called when the clipboard write fails. */
    onError?: (error: Error) => void;
    /** Render-prop children. Receives copied state and the copy handler. */
    children?: React__default.ReactNode | ((state: CopyButtonRenderState) => React__default.ReactNode);
}
declare const CopyButton: React__default.ForwardRefExoticComponent<CopyButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

export { CopyButton, type CopyButtonProps, type CopyButtonRenderState };
