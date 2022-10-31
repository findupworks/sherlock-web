import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBarVariant } from '../../types';
export interface NavBarSubItems {
    label: string;
    router: string;
}
export interface NavBarItems {
    label: string;
    router: string;
    subItems?: Array<NavBarSubItems>;
}
export interface StepsBreadcrumbItem {
    label: string;
    router: string;
    onClick?: () => void;
}
export interface IProps {
    navBarItems: Array<NavBarItems>;
    variant?: NavBarVariant;
}
export interface NavBarItemProps {
    router: string;
    label: string;
    index: number;
    isExistiSubItems: boolean;
}
export declare const NavBar: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map