import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';

export enum AlertVariant {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    danger = 'danger',
    warning = 'warning',
}

export interface IProps {
    variant?: AlertVariant
}

export const Alert: React.FC<IProps> = ({ 
    variant = AlertVariant.default,
    ...props
 }) => {
    return (
        <hr className="border-gray-200 dark:border-gray-700 " />
    )
}