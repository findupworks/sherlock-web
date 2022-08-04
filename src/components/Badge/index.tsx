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
            [`bg-${theme.colors.default.default} text-white`]: ColorVariant.default == variant,
            [`bg-${theme.colors.primary.default} text-white`] : ColorVariant.primary == variant,
            [`bg-${theme.colors.secondary.default} text-slate-500`] : ColorVariant.secondary == variant,
            [`bg-${theme.colors.success.default} text-white`] : ColorVariant.success == variant,
            [`bg-${theme.colors.info.default} text-white`] : ColorVariant.info == variant,
            [`bg-${theme.colors.warning.default} text-white`] : ColorVariant.warning == variant,
            [`bg-${theme.colors.danger.default} text-white`] : ColorVariant.danger == variant,
        })}>
            {label}
        </span>
    )
}