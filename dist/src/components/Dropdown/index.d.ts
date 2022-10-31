import React from "react";
import { DropwdonVariant, InputDropdownVariant } from "../../types";
export interface SubItem {
    label: string;
    isDivider?: boolean;
    value: any;
    onClick?: () => void;
    checked?: boolean;
}
export interface DropdownItem {
    label: string;
    isDivider?: boolean;
    icon?: string;
    value?: any;
    subItens?: Array<SubItem>;
    isTitleFilterBy?: boolean;
    typeInput?: InputDropdownVariant;
    onClickActionRight?: () => void;
    onClick?: () => void;
    checked?: boolean;
}
export declare type IProps = {
    label?: string;
    itemsMenu: DropdownItem[];
    leftIcon?: string;
    rightIcon?: string;
    onClickButtonDropwdon?: (event: any) => void;
    onChange?: (event: any, item: DropdownItem, index: number, isSubItem: boolean) => void;
    labelButtonDropdown?: string;
    variant: DropwdonVariant;
    isSearch?: boolean;
    disabled?: boolean;
};
export declare const Dropdown: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map