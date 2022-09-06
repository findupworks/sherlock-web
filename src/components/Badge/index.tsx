import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
export interface IProps {
    label: string,
    variant?: ColorVariant,
}
export const Badge: React.FC<IProps> = ({ 
    label,
    variant = "default",
    ...props
 }) => {
    //bg-

    return (
        <span className={classname({
            "text-xs font-semibold inline-block py-px px-1 uppercase last:mr-0 mr-1 rounded-full": true,
            // Outline none
            'bg-secondary text-secondaryL3': "default" == variant,
            'bg-primary text-white' : "primary" == variant,
            'bg-secondaryL3 text-secondary': "secondary" == variant,
            'bg-success text-white' : "success" == variant,
            'bg-info text-white' : "info" == variant,
            'bg-warning text-white': "warning" == variant,
            'bg-danger text-white': "danger" == variant,
            
           
        })}>
            { label }
        </span>
    )
}