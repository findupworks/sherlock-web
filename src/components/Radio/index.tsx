import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SizeVariant } from '../../types';

export interface IProps {
    label?: string,
    checked: boolean;
    onClick: () => void;
    disabled?: boolean;
    size?: SizeVariant,
}

export const Radio: React.FC<IProps> = ({ 
    label,
    size = 'md',
    disabled,
    checked = false,
    onClick,
    ...props
 }) => {
    

    return (
        <div className='flex items-center'>
         <input  type="radio" id="html" name="fav_language" value="HTML" className={classname({
            "appearance-none rounded-full border border-secondary bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" : true,
            'h-3 w-3 ' : 'sm' == size,
            'h-4 w-4 ' : 'md' == size,
            'h-5 w-5 ' : 'lg' == size,
            'bg-white border-primary border-4':checked,
            'bg-gray-500 border-white border-2' : !checked && disabled,
            'opacity-50 cursor-default' : disabled,
            'cursor-pointer': !disabled,
        })}  disabled={disabled} 
        checked={checked} onClick={onClick}
        ></input>
        {label != null && label != '' && label != undefined ? (
          <p className={classname({
            'text-gray-600': true,
            'opacity-50':disabled,
            'text-xs': 'sm' == size,
            'text-sm': 'md' == size,
            'text-md': 'lg' == size,
        })}>{label}</p>): <div></div>}
        </div>
    )
}