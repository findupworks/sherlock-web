import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SwitchSize } from '../../types';
export interface IProps {
    label?: string;
    checked: boolean;
    onClick?: () => void;
    onChange?: (value: any) => void;
    disabled?: boolean;
    size?: SwitchSize;
    checkedIcon?: string;
    notCheckedIcon?: string;
    variant?: ColorVariant;
}
export declare const Switch: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map