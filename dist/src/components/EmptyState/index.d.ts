import React from "react";
import { ColorVariant, SizeVariant, EmptyStateVariant } from '../../types';
export interface IProps {
    image?: string;
    title?: string;
    bodyMessage?: string;
    buttonLabel?: string;
    size?: SizeVariant;
    buttonVariant?: ColorVariant;
    variant?: EmptyStateVariant;
    onClickButton?: () => void;
}
export declare const EmptyState: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map