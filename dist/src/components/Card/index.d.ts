import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DropdownItem } from '../Dropdown';
import { CardVariant, SizeVariant } from '../../types';
export interface TagItem {
    text?: string;
}
export interface IProps {
    imageCard?: string;
    onClick?: () => void;
    title: string;
    body: string;
    variant?: CardVariant;
    size?: SizeVariant;
    checked?: boolean;
    iconCard?: string;
    iconButton?: string;
    itemsMenu: DropdownItem[];
    tags: TagItem[];
    onTapCheck?: (check: boolean) => void;
    onTapMenu?: () => void;
    onTapCard?: () => void;
    onTapIcon?: () => void;
}
export declare const Card: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map