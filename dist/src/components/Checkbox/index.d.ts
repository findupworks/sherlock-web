import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SizeVariant } from '../../types';
export interface IProps {
    label?: string;
    checked: boolean;
    onClick: () => void;
    disabled?: boolean;
    size?: SizeVariant;
    icon: string;
}
export declare const Checkbox: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map