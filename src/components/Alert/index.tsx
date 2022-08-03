import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';

export enum AlertVariant {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    danger = 'danger',
    warning = 'warning',
}

export interface IProps {
    outlined?: boolean;
    text: string,
    title: string,
    variant?: AlertVariant
    icon?: string,
}

export const Alert: React.FC<IProps> = ({ 
    text,
    title,
    icon = "warning",
    outlined = false,
    variant = AlertVariant.default,
    ...props
 }) => {

    const getIcon = () => {
        return <i className={`fas fa-${icon}`}></i>
    }

    return (
        <div className={classname({
            "text-white px-6 py-3 border-0 rounded relative mb-3": true,
            // Outline none
            'bg-gray-600 ' : AlertVariant.default == variant,
            'bg-teal-300 ' : AlertVariant.primary == variant,
            'bg-orange-400 ' : AlertVariant.secondary == variant,
            'bg-teal-400 ' : AlertVariant.success == variant,
            'bg-cyan-300 ' : AlertVariant.info == variant,
            'bg-amber-400 ' : AlertVariant.warning == variant,
            'bg-red-400 ' : AlertVariant.danger == variant,
            // Outline
            'outline outline-1 bg-transparent' : outlined,
            'text-gray-600 outline-gray-600' : AlertVariant.default == variant && outlined,
            'text-teal-300 outline-teal-300' : AlertVariant.primary == variant && outlined,
            'text-orange-400 outline-orange-400' : AlertVariant.secondary == variant && outlined,
            'text-teal-400 outline-teal-400' : AlertVariant.success == variant && outlined,
            'text-cyan-300 outline-cyan-300' : AlertVariant.info == variant && outlined,
            'text-amber-400 outline-amber-400' : AlertVariant.warning == variant && outlined,
            'text-red-400 outline-red-400' : AlertVariant.danger == variant && outlined,
        })}>
            <span className="text-xl inline-block mr-5 align-middle">
                {getIcon()}
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{title}</b> {text}
            </span>
        </div>
    )
}