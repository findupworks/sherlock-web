import React, { ReactNode } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import { SizeVariant } from '../../types';
export interface IProps {
    title: string;
    variant?: ColorVariant;
    labelButtonCancel?: string;
    labelButtonConfirm?: string;
    showModal: boolean;
    size?: SizeVariant;
    onHide: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
    children?: ReactNode;
    icon?: string;
}
export declare const Modal: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map