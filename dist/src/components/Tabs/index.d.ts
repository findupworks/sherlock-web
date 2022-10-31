import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface MenuItem {
    label?: string;
    countLabel?: string;
    colorLabel?: string;
    icon?: string;
    dropdownOptions?: DropdownItem[];
}
export interface DropdownItem {
    label?: string;
}
export interface IProps {
    menuItems: MenuItem[];
    onTapMenu?: () => void;
    onClickDropdownOption?: () => void;
}
export declare const Tabs: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map