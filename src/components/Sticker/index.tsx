import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StickerSizeVariant } from '../../types';
export interface IProps {
    size?: StickerSizeVariant,
    rounded?: boolean,
    img?: string,
    icon?: string
}

export const Sticker: React.FC<IProps> = ({ 
    size = 'md',
    rounded,
    img = "",
    icon = 'image',
    ...props
 }) => {
    
    return (
        <div className={classname({
            'w-6 h-6 fa-xs': 'xs' == size,
            'w-8 h-8 fa-sm': 'sm' == size,
            'w-10 h-10 ': 'md' == size,
            'w-12 h-12 fa-lg': 'lg' == size,
            'w-20 h-20 fa-2xl': 'xl' == size,
            'bg-white grid grid-cols-3' : img == '' || img == null,
            'rounded-full': rounded,
            'rounded-md': !rounded
        })}>
            {img != null && img != '' && img != undefined ? (
                 <img className={
                    classname({
                    'rounded-full' : rounded,
                    'rounded-md': !rounded,
                    'h-6': 'xs' == size,
                    'h-8': 'sm' == size,
                    'h-10': 'md' == size,
                    'h-12': 'lg' == size,
                    'h-20': 'xl' == size,
                })}
                 src={img}></img>
            ) : <div/>}
           
           {icon != null && icon != '' && icon != undefined && (img == "" || img == null) ? (
            <i className={`fas fa-${icon} place-self-center text-darkD1`}></i>
           ) : <div/>}

        </div>
    )
}