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
            'bg-secondary text-white': ColorVariant.default == variant && !outline ,
            'bg-secondary text-dark': ColorVariant.secondary == variant && !outline,
            'bg-success text-white' : ColorVariant.success == variant && !outline,
            'bg-info text-white' : ColorVariant.info == variant && !outline, 
            'bg-warning text-white' : ColorVariant.warning == variant && !outline,
            'bg-danger text-white' : ColorVariant.danger == variant && !outline,
            
            
            // Size
            'py-px px-1 text-[10px]' : LabelSize.sm == size,
            'text-xs py-[3px] px-2' : LabelSize.md == size,
           
           //outline
             'bg-transparent outline outline-2 ':outline,
             'outline-secondaryL2 text-secondary': ColorVariant.default == variant && outline ,
             'outline-secondaryL2 text-dark': ColorVariant.secondary == variant && outline,
             'outline-successL1 text-success' : ColorVariant.success == variant && outline,
             'outline-infoL1 text-info' : ColorVariant.info == variant && outline,
             'outline-warningL1 text-warning' : ColorVariant.warning == variant && outline,
             'outline-dangerL1 text-danger' : ColorVariant.danger == variant && outline,
            

        })}>
            {label}
        </span>
    )
}