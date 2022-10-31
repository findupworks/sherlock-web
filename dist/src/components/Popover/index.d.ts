import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PopoverDirection } from '../../types';
export interface IProps {
    tooltipText: String;
    popoverText: String;
    showPopover: boolean;
    direction?: PopoverDirection;
    target: string;
}
export declare const Popover: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map