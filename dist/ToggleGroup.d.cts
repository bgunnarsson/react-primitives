import React__default from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';

type ToggleGroupProps = (RadixToggleGroup.ToggleGroupSingleProps & React__default.RefAttributes<HTMLDivElement>) | (RadixToggleGroup.ToggleGroupMultipleProps & React__default.RefAttributes<HTMLDivElement>);
declare const ToggleGroup: React__default.ForwardRefExoticComponent<(RadixToggleGroup.ToggleGroupSingleProps | RadixToggleGroup.ToggleGroupMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;
interface ToggleGroupItemProps extends React__default.ComponentPropsWithoutRef<typeof RadixToggleGroup.Item> {
}
declare const ToggleGroupItem: React__default.ForwardRefExoticComponent<ToggleGroupItemProps & React__default.RefAttributes<HTMLButtonElement>>;

export { ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupProps };
