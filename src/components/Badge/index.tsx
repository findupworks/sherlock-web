import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';
import { ColorVariant } from '../../types';
import  theme from '../../theme'
export interface IProps {
    label: string,
    variant?: ColorVariant,
}

export const Badge: React.FC<IProps> = ({ 
    label,
    variant = ColorVariant.default,
    ...props
 }) => {
    

    return (
        <span className={classname({
            "text-xs font-semibold inline-block py-1 px-2 uppercase last:mr-0 mr-1 rounded-full ": true,
            // Outline none
            'bg-secondary text-white': ColorVariant.default == variant,
            'bg-primary text-white' : ColorVariant.primary == variant,
            'bg-secondaryL3 text-secondary' : ColorVariant.secondary == variant,
            'bg-success text-white': ColorVariant.success == variant,
            'bg-info text-white' : ColorVariant.info == variant,
            'bg-warning text-white' : ColorVariant.warning == variant,
            'bg-danger text-white' : ColorVariant.danger == variant,
            
           
        })}>
            {label}
        </span>
    )
}