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
    outlined:boolean
    iconRight:string
}

export const Label: React.FC<IProps> = ({ 
    label,
    variant = ColorVariant.default,
    size = LabelSize.md,
    outlined = false,
    iconRight,
    ...props
 }) => {
    
   
   const getIconRIght = ()=>{
    if(iconRight) return <i className={`fas fa-${iconRight}`}></i>
   }  
    

    return (
        <span className={classname({
            "rounded-sm	flex items-center gap-2": true,
            // Variant,  Outline none
            'bg-secondary text-white': ColorVariant.default == variant && !outlined ,
            'bg-secondary text-dark': ColorVariant.secondary == variant && !outlined,
            'bg-success text-white' : ColorVariant.success == variant && !outlined,
            'bg-info text-white' : ColorVariant.info == variant && !outlined, 
            'bg-warning text-white' : ColorVariant.warning == variant && !outlined,
            'bg-danger text-white' : ColorVariant.danger == variant && !outlined,
            
           
            //outline
             'bg-transparent outline outline-2 ':outlined,
             'outline-secondaryL2 text-secondary': ColorVariant.default == variant && outlined ,
             'outline-secondaryL2 text-dark': ColorVariant.secondary == variant && outlined,
             'outline-successL1 text-success' : ColorVariant.success == variant && outlined,
             'outline-infoL1 text-info' : ColorVariant.info == variant && outlined,
             'outline-warningL1 text-warning' : ColorVariant.warning == variant && outlined,
             'outline-dangerL1 text-danger' : ColorVariant.danger == variant && outlined,
            
            // Size
            'py-px px-1 text-[10px]' : LabelSize.sm == size,
            'text-xs py-[3px] px-2' : LabelSize.md == size,
        })}>
            {label}
            {getIconRIght()}
        </span>
    )
}