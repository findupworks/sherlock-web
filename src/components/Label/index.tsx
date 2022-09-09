import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SwitchSize } from '../../types';
export interface IProps {
    label: string,
    variant?: ColorVariant,
<<<<<<< HEAD
    size?: SizeVariant,
    outlined?: boolean,
    iconRight?: string
=======
    size?:SwitchSize
    outlined?:boolean
    iconRight?:string
>>>>>>> main
}

export const Label: React.FC<IProps> = ({ 
    label,
    variant = 'default',
    size = 'md',
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
            'bg-secondary text-white': 'default' == variant && !outlined ,
            'bg-secondary text-dark': 'secondary' == variant && !outlined,
            'bg-success text-white' : 'success' == variant && !outlined,
            'bg-info text-white' : 'info' == variant && !outlined, 
            'bg-warning text-white' : 'warning' == variant && !outlined,
            'bg-danger text-white' : 'danger' == variant && !outlined,
            
           
            //outline
             'bg-transparent outline outline-2 ':outlined,
             'outline-secondaryL2 text-secondary': 'default' == variant && outlined ,
             'outline-secondaryL2 text-dark': 'secondary' == variant && outlined,
             'outline-successL1 text-success' : 'success' == variant && outlined,
             'outline-infoL1 text-info' : 'info' == variant && outlined,
             'outline-warningL1 text-warning' : 'warning' == variant && outlined,
             'outline-dangerL1 text-danger' : 'danger' == variant && outlined,
            
            // Size
            'py-px px-1 text-[10px]' : 'sm' == size,
            'text-xs py-[3px] px-2' : 'md' == size,
        })}>
            {label}
            {getIconRIght()}
        </span>
    )
}