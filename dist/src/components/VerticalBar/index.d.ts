import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface IconsItem {
    iconType: string;
    divider?: boolean;
    onClick?: () => void;
}
export interface IProps {
    icons: IconsItem[];
    hasLogo?: boolean;
    iconsColor?: string;
    barColor?: string;
    onClickLogout?: () => void;
    onClickEdit?: () => void;
}
export declare const VerticalBar: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map