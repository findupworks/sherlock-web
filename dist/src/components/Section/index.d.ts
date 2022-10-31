import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SizeVariant } from '../../types';
export interface SectionItem {
    label?: string;
    icon?: boolean;
    disabled?: boolean;
}
export interface IProps {
    items: SectionItem[];
    size?: SizeVariant;
}
export interface SectionProps {
    label?: string;
    index?: number;
    hasIcon?: boolean;
    disabled?: boolean;
}
export declare const Section: React.FC<IProps>;
export declare const SectionItem: React.FC<SectionProps>;
//# sourceMappingURL=index.d.ts.map