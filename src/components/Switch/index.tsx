import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SwitchSize } from '../../types';
export interface IProps {
    label?: string,
    checked: boolean;
    onClick?: () => void;
    onChange?:(value)=> void
    disabled?: boolean;
    size?: SwitchSize,
    checkedIcon?: string;
    notCheckedIcon?: string;
    variant?: ColorVariant;
}

export const Switch: React.FC<IProps> = ({ 
    label,
    size = 'sm',
    disabled,
    checked,
    onClick,
    variant = 'default',
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
                        'bg-primary' : 'default' ==variant,
                        'bg-secondary': 'secondary' == variant,
                        'bg-success': 'success' == variant,
                        'bg-info': 'info' == variant,
                        'bg-danger': 'danger' == variant,
                        'bg-warning': 'warning' == variant,
                        'w-[60px] h-8': 'sm' == size,
                        'w-[70px] h-9': 'md' == size,
                    })}/>
                    <div className='absolute left-1 top-1'>
                        <div className={classname({
                            'bg-white rounded-full transition': true,
                            ' p-[0.01em] px-[0.23em]': 'sm' == size,
                            'p-[0.1em] px-[0.3em]': 'md' == size,
                            " translate-x-full ": checked
                        })}>
                        <i className={classname({
                            "fas fa-fw  fa-s/m fa-be/ll-slash": true,
                            "text-primary" : 'default' == variant,
                            "text-secondary": 'secondary' ==  variant,
                            "fa-sm" : 'sm' == size,
                            "fa-md" : 'md' == size,
                            [`fa-${checkedIcon}`] : checked,
                            [`fa-${notCheckedIcon}`] : !checked,
                        })}></i>
                        </div>
                    </div>
                </div>
                {label != ''  && label != null && label != undefined? (
                    <span className={classname({
                        "ml-3 font-medium text-darkD1": true,
                        'text-sm': 'sm' == size,
                        "text-md": 'md' == size,
                    })}>{label}</span>
                ): <div></div>} 
            </label>
        </>
    )
}