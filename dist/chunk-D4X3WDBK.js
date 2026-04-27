// src/components/PhoneInput/PhoneInput.tsx
import React from "react";

// src/components/PhoneInput/countries.ts
var DEFAULT_COUNTRIES = [
  { code: "US", name: "United States", dialCode: "1", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "CA", name: "Canada", dialCode: "1", flag: "\u{1F1E8}\u{1F1E6}" },
  { code: "GB", name: "United Kingdom", dialCode: "44", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "AU", name: "Australia", dialCode: "61", flag: "\u{1F1E6}\u{1F1FA}" },
  { code: "DE", name: "Germany", dialCode: "49", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "FR", name: "France", dialCode: "33", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "ES", name: "Spain", dialCode: "34", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "IT", name: "Italy", dialCode: "39", flag: "\u{1F1EE}\u{1F1F9}" },
  { code: "NL", name: "Netherlands", dialCode: "31", flag: "\u{1F1F3}\u{1F1F1}" },
  { code: "BE", name: "Belgium", dialCode: "32", flag: "\u{1F1E7}\u{1F1EA}" },
  { code: "CH", name: "Switzerland", dialCode: "41", flag: "\u{1F1E8}\u{1F1ED}" },
  { code: "AT", name: "Austria", dialCode: "43", flag: "\u{1F1E6}\u{1F1F9}" },
  { code: "SE", name: "Sweden", dialCode: "46", flag: "\u{1F1F8}\u{1F1EA}" },
  { code: "NO", name: "Norway", dialCode: "47", flag: "\u{1F1F3}\u{1F1F4}" },
  { code: "DK", name: "Denmark", dialCode: "45", flag: "\u{1F1E9}\u{1F1F0}" },
  { code: "FI", name: "Finland", dialCode: "358", flag: "\u{1F1EB}\u{1F1EE}" },
  { code: "IS", name: "Iceland", dialCode: "354", flag: "\u{1F1EE}\u{1F1F8}" },
  { code: "IE", name: "Ireland", dialCode: "353", flag: "\u{1F1EE}\u{1F1EA}" },
  { code: "PT", name: "Portugal", dialCode: "351", flag: "\u{1F1F5}\u{1F1F9}" },
  { code: "PL", name: "Poland", dialCode: "48", flag: "\u{1F1F5}\u{1F1F1}" },
  { code: "CZ", name: "Czechia", dialCode: "420", flag: "\u{1F1E8}\u{1F1FF}" },
  { code: "GR", name: "Greece", dialCode: "30", flag: "\u{1F1EC}\u{1F1F7}" },
  { code: "TR", name: "Turkey", dialCode: "90", flag: "\u{1F1F9}\u{1F1F7}" },
  { code: "RU", name: "Russia", dialCode: "7", flag: "\u{1F1F7}\u{1F1FA}" },
  { code: "UA", name: "Ukraine", dialCode: "380", flag: "\u{1F1FA}\u{1F1E6}" },
  { code: "IL", name: "Israel", dialCode: "972", flag: "\u{1F1EE}\u{1F1F1}" },
  { code: "AE", name: "United Arab Emirates", dialCode: "971", flag: "\u{1F1E6}\u{1F1EA}" },
  { code: "SA", name: "Saudi Arabia", dialCode: "966", flag: "\u{1F1F8}\u{1F1E6}" },
  { code: "IN", name: "India", dialCode: "91", flag: "\u{1F1EE}\u{1F1F3}" },
  { code: "PK", name: "Pakistan", dialCode: "92", flag: "\u{1F1F5}\u{1F1F0}" },
  { code: "BD", name: "Bangladesh", dialCode: "880", flag: "\u{1F1E7}\u{1F1E9}" },
  { code: "CN", name: "China", dialCode: "86", flag: "\u{1F1E8}\u{1F1F3}" },
  { code: "JP", name: "Japan", dialCode: "81", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "KR", name: "South Korea", dialCode: "82", flag: "\u{1F1F0}\u{1F1F7}" },
  { code: "SG", name: "Singapore", dialCode: "65", flag: "\u{1F1F8}\u{1F1EC}" },
  { code: "HK", name: "Hong Kong", dialCode: "852", flag: "\u{1F1ED}\u{1F1F0}" },
  { code: "TW", name: "Taiwan", dialCode: "886", flag: "\u{1F1F9}\u{1F1FC}" },
  { code: "TH", name: "Thailand", dialCode: "66", flag: "\u{1F1F9}\u{1F1ED}" },
  { code: "VN", name: "Vietnam", dialCode: "84", flag: "\u{1F1FB}\u{1F1F3}" },
  { code: "PH", name: "Philippines", dialCode: "63", flag: "\u{1F1F5}\u{1F1ED}" },
  { code: "ID", name: "Indonesia", dialCode: "62", flag: "\u{1F1EE}\u{1F1E9}" },
  { code: "MY", name: "Malaysia", dialCode: "60", flag: "\u{1F1F2}\u{1F1FE}" },
  { code: "NZ", name: "New Zealand", dialCode: "64", flag: "\u{1F1F3}\u{1F1FF}" },
  { code: "MX", name: "Mexico", dialCode: "52", flag: "\u{1F1F2}\u{1F1FD}" },
  { code: "BR", name: "Brazil", dialCode: "55", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "AR", name: "Argentina", dialCode: "54", flag: "\u{1F1E6}\u{1F1F7}" },
  { code: "CL", name: "Chile", dialCode: "56", flag: "\u{1F1E8}\u{1F1F1}" },
  { code: "CO", name: "Colombia", dialCode: "57", flag: "\u{1F1E8}\u{1F1F4}" },
  { code: "PE", name: "Peru", dialCode: "51", flag: "\u{1F1F5}\u{1F1EA}" },
  { code: "ZA", name: "South Africa", dialCode: "27", flag: "\u{1F1FF}\u{1F1E6}" },
  { code: "NG", name: "Nigeria", dialCode: "234", flag: "\u{1F1F3}\u{1F1EC}" },
  { code: "EG", name: "Egypt", dialCode: "20", flag: "\u{1F1EA}\u{1F1EC}" },
  { code: "KE", name: "Kenya", dialCode: "254", flag: "\u{1F1F0}\u{1F1EA}" }
];

// src/components/PhoneInput/PhoneInput.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var onlyDigits = (s) => s.replace(/\D+/g, "");
var findCountryFromValue = (value, countries) => {
  if (!value.startsWith("+")) return void 0;
  const digits = value.slice(1);
  return [...countries].sort((a, b) => b.dialCode.length - a.dialCode.length).find((c) => digits.startsWith(c.dialCode));
};
var PhoneInput = React.forwardRef(
  ({
    value: valueProp,
    defaultValue,
    onValueChange,
    defaultCountry = "US",
    countries = DEFAULT_COUNTRIES,
    formatNational,
    selectClassName,
    selectStyle,
    inputClassName,
    inputStyle,
    className,
    style,
    disabled,
    placeholder,
    ...inputProps
  }, ref) => {
    const controlled = valueProp !== void 0;
    const initialCountry = findCountryFromValue(controlled ? valueProp : defaultValue ?? "", countries) ?? countries.find((c) => c.code === defaultCountry) ?? countries[0];
    const initialDigits = (() => {
      const v = controlled ? valueProp : defaultValue ?? "";
      if (!v.startsWith("+") || !initialCountry) return "";
      return v.slice(1 + initialCountry.dialCode.length);
    })();
    const [country, setCountry] = React.useState(initialCountry);
    const [nationalDigits, setNationalDigits] = React.useState(initialDigits);
    React.useEffect(() => {
      if (!controlled) return;
      const next = findCountryFromValue(valueProp, countries);
      if (next) {
        setCountry(next);
        setNationalDigits(valueProp.slice(1 + next.dialCode.length));
      } else if (!valueProp) {
        setNationalDigits("");
      }
    }, [valueProp, controlled, countries]);
    const buildE164 = (c, digits) => digits ? `+${c.dialCode}${digits}` : "";
    const emit = (c, digits) => {
      onValueChange?.(buildE164(c, digits), c);
    };
    const handleCountry = (e) => {
      const next = countries.find((c) => c.code === e.target.value);
      if (!next) return;
      setCountry(next);
      emit(next, nationalDigits);
    };
    const handleInput = (e) => {
      const digits = onlyDigits(e.target.value);
      setNationalDigits(digits);
      emit(country, digits);
    };
    const display = formatNational ? formatNational(nationalDigits, country) : nationalDigits;
    return /* @__PURE__ */ jsxs("div", { "data-disabled": disabled || void 0, className, style, children: [
      /* @__PURE__ */ jsx(
        "select",
        {
          "aria-label": "Country",
          value: country.code,
          onChange: handleCountry,
          disabled,
          className: selectClassName,
          style: selectStyle,
          children: countries.map((c) => /* @__PURE__ */ jsxs("option", { value: c.code, children: [
            c.flag,
            " ",
            c.name,
            " (+",
            c.dialCode,
            ")"
          ] }, c.code))
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          type: "tel",
          inputMode: "tel",
          autoComplete: "tel-national",
          value: display,
          onChange: handleInput,
          disabled,
          placeholder,
          className: inputClassName,
          style: inputStyle,
          ...inputProps
        }
      )
    ] });
  }
);
PhoneInput.displayName = "PhoneInput";

export {
  DEFAULT_COUNTRIES,
  PhoneInput
};
