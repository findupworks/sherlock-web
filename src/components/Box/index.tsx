import React, { ReactNode } from 'react';
import classname from 'classnames';
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

export const Box: React.FC<BoxProps> = ({ ...props}) => {
    return(
        <div className={props.className}>
            { props.children }
        </div>
    )
}

export const BoxHeader: React.FC<BoxHeaderProps> = ({ ...props}) => {
    return(
        <div className={props.className}>
            { props.children }
        </div>
    )
}

export const BoxBody: React.FC<BoxBodyProps> = ({ ...props}) => {
    return(
        <div className={props.className}>
            { props.children }
        </div>
    )
}

export const BoxFooter: React.FC<BoxBodyProps> = ({ ...props}) => {
    return(
        <div className={props.className}>
            { props.children }
        </div>
    )
}