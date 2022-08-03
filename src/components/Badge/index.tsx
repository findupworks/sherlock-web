import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';
import { ColorVariant } from '../../types';

export interface IProps {
    outlined?: boolean;
    label: string,
    variant?: ColorVariant,
    rounded ?: boolean;
}

export const Badge: React.FC<IProps> = ({ 
    label,
    outlined = false,
    variant = ColorVariant.default,
    rounded = false,
    ...props
 }) => {

    return (
        <span className={classname({
            "text-xs font-semibold inline-block py-1 px-2 rounded uppercase last:mr-0 mr-1": true,
            // Outline none
            'bg-gray-200 text-gray-600 ' : ColorVariant.default == variant && !outlined,
            'bg-teal-200 text-teal-600' : ColorVariant.primary == variant && !outlined,
            'bg-orange-200 text-orange-600 ' : ColorVariant.secondary == variant && !outlined,
            'bg-teal-200  text-teal-600' : ColorVariant.success == variant && !outlined,
            'bg-cyan-200 text-cyan-600' : ColorVariant.info == variant && !outlined,
            'bg-amber-200 text-amber-600' : ColorVariant.warning == variant && !outlined,
            'bg-red-200 text-red-600 ' : ColorVariant.danger == variant && !outlined,
            // Outline
            'outline outline-1 bg-transparent' : outlined,
            'bg-transparent text-gray-600 outline-gray-600' : ColorVariant.default == variant && outlined,
            'bg-transparent text-teal-300 outline-teal-300' : ColorVariant.primary == variant && outlined,
            'bg-transparent text-orange-400 outline-orange-400' : ColorVariant.secondary == variant && outlined,
            'bg-transparent text-teal-400 outline-teal-400' : ColorVariant.success == variant && outlined,
            'bg-transparent text-cyan-300 outline-cyan-300' : ColorVariant.info == variant && outlined,
            'bg-transparent text-amber-400 outline-amber-400' : ColorVariant.warning == variant && outlined,
            'bg-transparent text-red-400 outline-red-400' : ColorVariant.danger == variant && outlined,

            'rounded-full' : rounded
        })}>
            {label}
        </span>
    )
}