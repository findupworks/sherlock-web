import React, { InputHTMLAttributes } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, InputTypeVariant } from "../../types";
export interface SelectorItem {
    label?: string;
    value?: string;
}
export declare type IProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelDefault?: string;
    inputType: InputTypeVariant;
    selectorItems?: SelectorItem[];
    colorVariant?: ColorVariant;
    tag?: boolean;
    icon?: string;
    isVisible?: boolean;
    onClickIcon?: () => void;
};
export declare const Input: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map