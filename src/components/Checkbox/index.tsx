import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";

export interface IProps {
    label?: string,
    checked: boolean;
    onClick: () => void;
    disabled?: boolean;
    size?: CheckBoxSize,
    icon: string,
}

export enum CheckBoxSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

export const Checkbox: React.FC<IProps> = ({ 
    label,
    size = CheckBoxSize.md,
    disabled,
    checked,
    onClick,
    icon,
    ...props
 }) => {
    

    return (
      <div className={classname({
        "flex items-center mr-4 mb-2 cursor-pointer": true,
        "opacity-50":disabled
      })}>
        <div className={classname({
            "bg-white rounded-sm border border-secondary flex flex-shrink-0 justify-center items-center mr-2":true,
            "bg-primary border-none" : checked,
            'bg-gray-500 border-white border-1' : !checked && disabled,
            "cursor-pointer" : !disabled,
            'w-4 h-4 fa-xs' : CheckBoxSize.sm == size,
            'w-5 h-5 ' : CheckBoxSize.md == size,
            'w-6 h-6 ' : CheckBoxSize.lg == size
          })}>
          {checked ? <i className={`fas fa-${icon} text-white`}></i> : null}
        </div>

        {label != '' && label != null && label != undefined ? (
          <label className={classname({
            'text-sm ' : CheckBoxSize.sm == size,
            'text-md ' : CheckBoxSize.md == size,
            'text-lg' : CheckBoxSize.lg == size
          })}>{label}</label>
        ): <div/> }
      </div>
    )
}