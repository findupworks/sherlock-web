import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../../index.css';
import ReactLoading from 'react-loading';
import theme from '../../theme'

export enum ButtonVariant {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    danger = 'danger',
    warning = 'warning',
}

export enum ButtonSize {
    sm = 'sm',
    md = 'md',
}

export interface IProps {
    outlined?: boolean;
    full?: boolean;
    loading?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    label: string,
    variant?: ButtonVariant
    size?: ButtonSize,
    leftIcon?: string,
    rightIcon?: string,
}

export const Button: React.FC<IProps> = ({ 
    label,
    leftIcon,
    rightIcon,
    disabled = false,
    outlined = false,
    loading = false,
    size = ButtonSize.md,
    variant = ButtonVariant.default,
    onClick,
    full = false,
    ...props
 }) => {

    const getIcon = (icon: string) => {
        return <i className={`${icon}`}></i>
    }

    const getLeftIcon = () => {
        if(leftIcon) return getIcon(leftIcon);
    }

    const getRightIcon = () => {
        if (rightIcon) return getIcon(rightIcon);
    }

    const getLoading = () => <ReactLoading type='spin' color='#FFF' height={"20px"} width={"20px"}/>;

    const getRealContent = () => <span>{getLeftIcon()} <span className='mx-2'>{label}</span> {getRightIcon()}</span>

    const getContent = () => {
        if(loading) {
            return getLoading();
        }

        return getRealContent();
    }
     console.log(`bg-${theme.colors.warning.default} text-white`, )
    return (
        <button onClick={onClick} disabled={disabled} className={
            classname({
                'font-bold uppercase rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer' :  true,
                // Outline none
                [`bg-${ theme.colors.default.default} text-white`] : ButtonVariant.default == variant,
                [`bg-${theme.colors.primary.default} text-white`] : ButtonVariant.primary == variant,
                [`bg-${theme.colors.secondary.default} text-white`] : ButtonVariant.secondary == variant,
                [`bg-${theme.colors.success.default} text-white`] : ButtonVariant.success == variant,
                [`bg-${theme.colors.info.default} text-white`] : ButtonVariant.info == variant,
                [`bg-${theme.colors.warning.default} text-white`] : ButtonVariant.warning == variant,
                [`bg-${theme.colors.danger.default} text-white`] : ButtonVariant.danger == variant,
            
                // Outline
                'outline outline-2 bg-transparent' : outlined,
                'text-gray-600 outline-gray-600  enabled:active:outline-gray-700 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-gray-700' : ButtonVariant.default == variant && outlined,
                'text-teal-300 outline-teal-300  enabled:active:outline-teal-500 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-teal-500' : ButtonVariant.primary == variant && outlined,
                'text-orange-400 outline-orange-400  enabled:active:outline-orange-600 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-orange-600' : ButtonVariant.secondary == variant && outlined,
                'text-teal-400 outline-teal-400  enabled:active:outline-teal-500 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-teal-500' : ButtonVariant.success == variant && outlined,
                'text-cyan-300 outline-cyan-300  enabled:active:outline-cyan-500 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-cyan-500' : ButtonVariant.info == variant && outlined,
                'text-amber-400 outline-amber-400  enabled:active:outline-amber-500 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-amber-500' : ButtonVariant.warning == variant && outlined,
                'text-red-400 outline-red-400  enabled:active:outline-red-500 enabled:hover:text-white enabled:active:text-white enabled:hover:outline-red-500' : ButtonVariant.danger == variant && outlined,

                // Size
                'text-sm px-3 py-1.5' : ButtonSize.sm == size,
                'text-base px-4 py-2' : ButtonSize.md == size,

                'opacity-25' : disabled,


                'w-screen' : full
            })
        }>
            {getContent()}
        </button>
    )
}