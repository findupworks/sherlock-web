import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ListVariant } from '../../types';
import { DropdownItem } from '../Dropdown';
export interface ItemsListItem {
    title: string;
    subTitle?: string;
    labelText?: string;
    img?: string;
    icon?: string;
    keyItem: any;
    variant?: string;
    dropDrownAction?: Array<DropdownItem>;
    isAselectableItem?: boolean;
    onClick?: (value: any) => void;
    onClickActionInfo?: (value: any) => void;
    onClickActionDelete?: (value: any) => void;
    onClickActionCopy?: (value: any) => void;
    handleItemSelected?: () => void;
    itemsKeySelected?: Array<any>;
}
export interface IProps {
    itemsList: Array<ItemsListItem>;
    variant?: ListVariant;
    onChangeItemsSelected?: (itemsSelected: any) => void;
}
export declare const ItemList: ({ title, subTitle, labelText, img, icon, dropDrownAction, isAselectableItem, onClickActionInfo, onClickActionDelete, onClick, onClickActionCopy, keyItem, variant, itemsKeySelected, handleItemSelected, }: ItemsListItem) => JSX.Element;
export declare const List: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map