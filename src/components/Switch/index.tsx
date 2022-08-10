import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';
import { ColorVariant } from '../../types';
import  theme from '../../theme'

export interface IProps {
    label: string,
    checked: boolean;
    onClick?: () => void;
    disabled?: boolean;
    size?: RadioSize,
}

export enum RadioSize {
    sm = 'sm',
    md = 'md',
}

export const Switch: React.FC<IProps> = ({ 
    label,
    size = RadioSize.sm,
    disabled,
    checked,
    onClick,
    ...props
 }) => {
    

    return (
        <div className='flex items-center'>
         <input  type="radio" id="html" name="fav_language" value="HTML" className={classname({
            "appearance-none rounded-full border border-secondary bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" : true,
            'h-4 w-4 ' : RadioSize.sm == size,
            'h-5 w-5 ' : RadioSize.md == size,
            'bg-white border-primary border-4':checked,
            ' bg-gray-500 border-white' : !checked && disabled,
            'border-white border-2 opacity-50 cursor-default' : disabled,
            'cursor-pointer': !disabled,
        })}  disabled={disabled} 
        checked={checked} onClick={onClick}
        ></input>
          <p className={classname({
            'text-gray-600': true,
            'opacity-50':disabled,
        })}>{label}</p>
        </div>
    )
}