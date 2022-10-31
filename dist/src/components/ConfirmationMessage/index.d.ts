import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SizeVariant } from '../../types';
export interface IProps {
    message: string;
    labelButtonCancel?: string;
    labelButtonConfirm?: string;
    size?: SizeVariant;
    variant?: ColorVariant;
    showConfirmationMessage: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
}
export declare const ConfirmationMessage: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map