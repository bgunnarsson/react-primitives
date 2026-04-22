import React__default from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

interface RadioGroupProps extends React__default.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> {
}
declare const RadioGroup: React__default.ForwardRefExoticComponent<RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
interface RadioGroupItemProps extends React__default.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
}
declare const RadioGroupItem: React__default.ForwardRefExoticComponent<RadioGroupItemProps & React__default.RefAttributes<HTMLButtonElement>>;

export { RadioGroup, RadioGroupItem, type RadioGroupItemProps, type RadioGroupProps };
