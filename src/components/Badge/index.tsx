import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';
import { ColorVariant } from '../../types';
import  theme from '../../theme'
export interface IProps {
    label: string,
    variant?: ColorVariant,
    rounded ?: boolean;
}

export const Badge: React.FC<IProps> = ({ 
    label,
    variant = ColorVariant.default,
    rounded = false,
    ...props
 }) => {
    
    return (
        <span className={classname({
            "text-xs font-semibold inline-block py-1 px-2 uppercase last:mr-0 mr-1 rounded-lg": true,
            // Outline none
            [`${theme.colors.bg.default} ${theme.colors.text.default}`]: ColorVariant.default == variant,
            [`${theme.colors.bg.primary} ${theme.colors.text.primary}`] : ColorVariant.primary == variant,
            [`${theme.colors.bg.secondary} ${theme.colors.text.secondary}`] : ColorVariant.secondary == variant,
            [`${theme.colors.bg.success} ${theme.colors.text.success}`] : ColorVariant.success == variant,
            [`${theme.colors.bg.info} ${theme.colors.text.info}`] : ColorVariant.info == variant,
            [`${theme.colors.bg.warning} ${theme.colors.text.warning}`] : ColorVariant.warning == variant,
            [`${theme.colors.bg.danger} ${theme.colors.text.danger}`] : ColorVariant.danger == variant,
            
            // border-radius:
            'rounded-full' : rounded
        })}>
            {label}
        </span>
    )
}