import React__default from 'react';

interface RatingProps {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    max?: number;
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    className?: string;
    style?: React__default.CSSProperties;
    renderItem?: (state: {
        index: number;
        filled: boolean;
        active: boolean;
    }) => React__default.ReactNode;
    'aria-label'?: string;
}
declare const Rating: React__default.ForwardRefExoticComponent<RatingProps & React__default.RefAttributes<HTMLDivElement>>;

export { Rating, type RatingProps };
