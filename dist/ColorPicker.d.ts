import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';
import { HexColorPicker, HslaColorPicker, HexColorInput, RgbaColorPicker, HexAlphaColorPicker } from 'react-colorful';

type ColorPickerProps = React__default.ComponentProps<typeof HexColorPicker>;
declare const ColorPicker: (props: ColorPickerProps) => react_jsx_runtime.JSX.Element;
type ColorPickerWithAlphaProps = React__default.ComponentProps<typeof HexAlphaColorPicker>;
declare const ColorPickerWithAlpha: (props: ColorPickerWithAlphaProps) => react_jsx_runtime.JSX.Element;
type ColorPickerRgbaProps = React__default.ComponentProps<typeof RgbaColorPicker>;
declare const ColorPickerRgba: (props: ColorPickerRgbaProps) => react_jsx_runtime.JSX.Element;
type ColorPickerHslaProps = React__default.ComponentProps<typeof HslaColorPicker>;
declare const ColorPickerHsla: (props: ColorPickerHslaProps) => react_jsx_runtime.JSX.Element;
type ColorPickerInputProps = React__default.ComponentProps<typeof HexColorInput>;
declare const ColorPickerInput: (props: ColorPickerInputProps) => react_jsx_runtime.JSX.Element;

export { ColorPicker, ColorPickerHsla, type ColorPickerHslaProps, ColorPickerInput, type ColorPickerInputProps, type ColorPickerProps, ColorPickerRgba, type ColorPickerRgbaProps, ColorPickerWithAlpha, type ColorPickerWithAlphaProps };
