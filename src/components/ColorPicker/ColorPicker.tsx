import React from 'react'
import {
  HexColorPicker,
  HexColorInput,
  HexAlphaColorPicker,
  RgbaColorPicker,
  HslaColorPicker,
} from 'react-colorful'

export type ColorPickerProps = React.ComponentProps<typeof HexColorPicker>

export const ColorPicker = (props: ColorPickerProps) => <HexColorPicker {...props} />

export type ColorPickerWithAlphaProps = React.ComponentProps<typeof HexAlphaColorPicker>

export const ColorPickerWithAlpha = (props: ColorPickerWithAlphaProps) => <HexAlphaColorPicker {...props} />

export type ColorPickerRgbaProps = React.ComponentProps<typeof RgbaColorPicker>

export const ColorPickerRgba = (props: ColorPickerRgbaProps) => <RgbaColorPicker {...props} />

export type ColorPickerHslaProps = React.ComponentProps<typeof HslaColorPicker>

export const ColorPickerHsla = (props: ColorPickerHslaProps) => <HslaColorPicker {...props} />

export type ColorPickerInputProps = React.ComponentProps<typeof HexColorInput>

export const ColorPickerInput = (props: ColorPickerInputProps) => <HexColorInput {...props} />
