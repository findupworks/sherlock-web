import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from "../../types";
export declare enum AlertTypes {
    alertFixed = "alertFixed",
    alertTemporary = "alertTemporary"
}
export interface IProps {
    variant?: ColorVariant;
    title?: string;
    text: string;
    onHiden: () => void;
    onClickOne?: () => void;
    labelButtonOne?: string;
    onClickTwo?: () => void;
    labelButtonTwo?: string;
    showAlert: boolean;
    onAlertBorderBottom?: boolean;
}
export declare const Alert: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map