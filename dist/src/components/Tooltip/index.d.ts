import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TooltipDirection } from '../../types';
export interface IProps {
    tooltipText: String;
    direction?: TooltipDirection;
    target: string;
}
export interface ArrowProps {
    direction: TooltipDirection;
}
export declare const Tooltip: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map