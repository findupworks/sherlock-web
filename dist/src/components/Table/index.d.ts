import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface IProps {
    children?: ReactNode;
}
export interface ITableHeadProps {
    children?: ReactNode;
    divider?: boolean;
    dividerLabel?: string;
}
export interface IThProps {
    children?: ReactNode;
    status?: boolean;
}
export interface ITrProps {
    children?: ReactNode;
}
export interface ITdProps {
    status?: boolean;
    statusColor?: string;
    children?: ReactNode;
}
export declare const TableHead: React.FC<ITableHeadProps>;
export declare const Th: React.FC<IThProps>;
export declare const TableBody: React.FC<IProps>;
export declare const Tr: React.FC<ITrProps>;
export declare const Td: React.FC<ITdProps>;
export declare const Table: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map