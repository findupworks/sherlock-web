import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import classNames from 'classnames';

export enum SpinnerSize {
    sm = 'sm',
    md = 'md',
}

export interface IProps {
    variant?: ColorVariant,
    size?: SpinnerSize,
}

export const Spinner: React.FC<IProps> = ({
    size = 'md',
    variant = 'primary',
    ...props
 }) => {
    return (
        <svg className={
            classNames({
                "animate-spin -ml-1 mr-3 text-white" : true,
                "text-primary" : ColorVariant.primary == variant,
                "text-secondary" : ColorVariant.secondary == variant,
                "text-success" : ColorVariant.success == variant,
                "text-info" : ColorVariant.info == variant,
                "text-danger" : ColorVariant.danger == variant,
                "text-warning" : ColorVariant.warning == variant,
                'w-2 h-2' : size == SpinnerSize.sm,
                'w-5 h-5' : size == SpinnerSize.md
            })
        } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width={4}></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )
}