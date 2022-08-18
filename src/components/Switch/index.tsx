import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
export interface IProps {
    label?: string,
    checked: boolean;
    onClick: () => void;
    disabled?: boolean;
    size?: SwitchSize,
    checkedIcon?: string;
    notCheckedIcon?: string;
    variant?: ColorVariant;
}

export enum SwitchVariant {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    danger = 'danger',
    warning = 'warning',
}

export enum SwitchSize {
    sm = 'sm',
    md = 'md',
}

export const Switch: React.FC<IProps> = ({ 
    label,
    size = SwitchSize.sm,
    disabled,
    checked,
    onClick,
    variant = ColorVariant.default,
    checkedIcon,
    notCheckedIcon,
    ...props
 }) => {
    
    return (
        <>
            <label  className={classname({
                "inline-flex relative items-center cursor-pointer": true,
                "opacity-50": disabled
            })} onClick={onClick}>
                
                <div className='relative'>
                    <div className={classname({
                        'block rounded-full': true,
                        'bg-primary' :ColorVariant.default ==variant,
                        'bg-secondary':ColorVariant.secondary == variant,
                        'bg-success':ColorVariant.success == variant,
                        'bg-info':ColorVariant.info == variant,
                        'bg-danger':ColorVariant.danger == variant,
                        'bg-warning':ColorVariant.warning == variant,
                        'w-[60px] h-8': SwitchSize.sm == size,
                        'w-[70px] h-9': SwitchSize.md == size,
                    })}/>
                    <div className='absolute left-1 top-1'>
                        <div className={classname({
                            'bg-white rounded-full transition': true,
                            ' p-[0.01em] px-[0.23em]': SwitchSize.sm == size,
                            'p-[0.1em] px-[0.3em]': SwitchSize.md == size,
                            " translate-x-full ": checked
                        })}>
                        <i className={classname({
                            "fas fa-fw  fa-s/m fa-be/ll-slash": true,
                            "text-primary" : ColorVariant.default == variant,
                            "text-secondary": ColorVariant.secondary ==  variant,
                            "fa-sm" : SwitchSize.sm == size,
                            "fa-md" : SwitchSize.md == size,
                            [`fa-${checkedIcon}`] : checked,
                            [`fa-${notCheckedIcon}`] : !checked,
                        })}></i>
                        </div>
                    </div>
                </div>
                {label != ''  && label != null && label != undefined? (
                    <span className={classname({
                        "ml-3 font-medium text-darkD1": true,
                        'text-sm': SwitchSize.sm == size,
                        "text-md": SwitchSize.md == size,
                    })}>{label}</span>
                ): <div></div>} 
            </label>
        </>
    )
}