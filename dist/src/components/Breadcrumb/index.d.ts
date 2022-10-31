import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface StepsBreadcrumb {
    label: string;
    router: string;
}
export interface StepsBreadcrumbItem {
    label: string;
    router: string;
    onClick?: () => void;
    key?: number;
}
export interface IProps {
    stepsBreadcrumb: Array<StepsBreadcrumb>;
}
export interface StepLinkProps {
    router: string;
    label: string;
    index: number;
}
export declare const Breadcrumb: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map