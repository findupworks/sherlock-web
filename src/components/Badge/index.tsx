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
            [`${theme.colors.bg.default} text-white`]: ColorVariant.default == variant,
            [`${theme.colors.bg.primary} text-white`] : ColorVariant.primary == variant,
            [`${theme.colors.bg.secondary} text-slate-500`] : ColorVariant.secondary == variant,
            [`${theme.colors.bg.success} text-white`] : ColorVariant.success == variant,
            [`${theme.colors.bg.info} text-white`] : ColorVariant.info == variant,
            [`${theme.colors.bg.warning} text-white`] : ColorVariant.warning == variant,
            [`${theme.colors.bg.danger} text-white`] : ColorVariant.danger == variant,
            
           
        })}>
            {label}
        </span>
    )
}