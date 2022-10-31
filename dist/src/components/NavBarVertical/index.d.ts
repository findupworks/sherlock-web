import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface NavBarVerticalSubItems {
    label: string;
    router: string;
}
export interface NavBarVerticalItems {
    label: string;
    router: string;
    subItems?: Array<NavBarVerticalSubItems>;
}
export interface NavbarVerticalItem {
    label: string;
    router: string;
    onClick?: () => void;
}
export interface IProps {
    navBarItems: Array<NavBarVerticalItems>;
}
export interface NavBarItemProps {
    router: string;
    label: string;
    index: number;
    subItems: Array<NavBarVerticalItems>;
}
export declare const NavBarVertical: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map