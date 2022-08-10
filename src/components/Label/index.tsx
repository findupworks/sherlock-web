import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';

export enum LabelSize {
    sm = 'sm',
    md = 'md',
}


export interface IProps {
    label: string,
    variant?: ColorVariant,
    size:LabelSize
    outline:boolean
}

export const Label: React.FC<IProps> = ({ 
    label,
    variant = ColorVariant.default,
    size = LabelSize.md,
    outline = false,
    ...props
 }) => {
    

    return (
        <span className={classname({
            "rounded-sm	": true,
            // Variant,  Outline none
            'bg-secondary text-white': ColorVariant.default == variant ,
            'bg-secondary text-dark': ColorVariant.secondary == variant,
            'bg-success text-white' : ColorVariant.success == variant,
            'bg-info text-white' : ColorVariant.info == variant,
            'bg-warning text-white' : ColorVariant.warning == variant,
            'bg-danger text-white' : ColorVariant.danger == variant,
            
            
            // Size
            'py-px px-1 text-[10px]' : LabelSize.sm == size,
            'text-xs py-[3px] px-2' : LabelSize.md == size,


        })}>
            {label}
        </span>
    )
}