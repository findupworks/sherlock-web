import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface BoxProps extends React.ComponentProps<"div"> {
    classname?: string;
}
export interface BoxHeaderProps extends React.ComponentProps<"div"> {
    classname?: string;
}
export interface BoxBodyProps extends React.ComponentProps<"div"> {
    classname?: string;
}
export interface BoxFooterProps extends React.ComponentProps<"div"> {
    classname?: string;
}
export declare const Box: React.FC<BoxProps>;
export declare const BoxHeader: React.FC<BoxHeaderProps>;
export declare const BoxBody: React.FC<BoxBodyProps>;
export declare const BoxFooter: React.FC<BoxBodyProps>;
//# sourceMappingURL=index.d.ts.map