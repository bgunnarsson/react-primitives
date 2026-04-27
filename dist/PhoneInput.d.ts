import React__default from 'react';

interface PhoneCountry {
    /** ISO 3166-1 alpha-2 country code */
    code: string;
    /** Country name */
    name: string;
    /** International dial code without `+` */
    dialCode: string;
    /** Emoji flag */
    flag: string;
}
declare const DEFAULT_COUNTRIES: PhoneCountry[];

interface PhoneInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
    /** Controlled E.164 value (e.g. `+15551234567`). */
    value?: string;
    /** Uncontrolled initial E.164 value. */
    defaultValue?: string;
    /** Called with the E.164-formatted value (or empty string when cleared). */
    onValueChange?: (value: string, country: PhoneCountry) => void;
    /** Default country ISO code when no value is supplied. */
    defaultCountry?: string;
    /** List of countries to render in the selector. */
    countries?: PhoneCountry[];
    /** Custom national-number formatter (digits → display string). */
    formatNational?: (digits: string, country: PhoneCountry) => string;
    selectClassName?: string;
    selectStyle?: React__default.CSSProperties;
    inputClassName?: string;
    inputStyle?: React__default.CSSProperties;
}
declare const PhoneInput: React__default.ForwardRefExoticComponent<PhoneInputProps & React__default.RefAttributes<HTMLInputElement>>;

export { DEFAULT_COUNTRIES, type PhoneCountry, PhoneInput, type PhoneInputProps };
