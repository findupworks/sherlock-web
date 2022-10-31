import React, { ButtonHTMLAttributes } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SizeVariant } from "../../types";
export declare type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    outlined?: boolean;
    full?: boolean;
    loading?: boolean;
    disabled?: boolean;
    label: string;
    variant?: ColorVariant;
    size?: SizeVariant;
    leftIcon?: string;
    rightIcon?: string;
    textButton?: boolean;
};
export declare const Button: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map