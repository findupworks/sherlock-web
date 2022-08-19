import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";

export enum StickerSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl'
}

export interface IProps {
    size?: StickerSize,
    rounded?: boolean,
    img?: string,
    icon?: string
}

export const Sticker: React.FC<IProps> = ({ 
    size = StickerSize.md,
    rounded,
    img = "",
    icon = 'image',
    ...props
 }) => {
    
    return (
        <div className={classname({
            'w-6 h-6 fa-xs': StickerSize.xs == size,
            'w-8 h-8 fa-sm': StickerSize.sm == size,
            'w-10 h-10 ': StickerSize.md == size,
            'w-12 h-12 fa-lg': StickerSize.lg == size,
            'w-20 h-20 fa-2xl': StickerSize.xl == size,
            'bg-white grid grid-cols-3' : img == '' || img == null,
            'rounded-full': rounded,
            'rounded-md': !rounded
        })}>
            {img != null && img != '' && img != undefined ? (
                 <img className={
                    classname({
                    'rounded-full' : rounded,
                    'rounded-md': !rounded,
                    'h-6': StickerSize.xs == size,
                    'h-8': StickerSize.sm == size,
                    'h-10': StickerSize.md == size,
                    'h-12': StickerSize.lg == size,
                    'h-20': StickerSize.xl == size,
                })}
                 src={img}></img>
            ) : <div/>}
           
           {icon != null && icon != '' && icon != undefined && (img == "" || img == null) ? (
            <i className={`fas fa-${icon} place-self-center text-darkD1`}></i>
           ) : <div/>}

        </div>
    )
}