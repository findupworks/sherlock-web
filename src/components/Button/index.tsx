import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';

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

    const getLoading = () => <ReactLoading className= 'mx-auto' type='spin' color='#FFF' height={"20px"} width={"20px"} />;

    const getRealContent = () => <span>{getLeftIcon()}<span className='mx-2'>{label}</span>{getRightIcon()}</span>

    const getContent = () => {
        if(loading) {
            return getLoading();
        }

        return getRealContent();
    }

    return (
        <button disabled={disabled} className={
            classname({
                'font-bold uppercase rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150' :  true,
                // Outline none
                'bg-secondary text-white' : ButtonVariant.default == variant && !outlined || ButtonVariant.secondary == variant && !outlined,
                'bg-primary text-white' : ButtonVariant.primary == variant && !outlined,
                'bg-success text-white' : ButtonVariant.success == variant && !outlined,
                'bg-info text-white' : ButtonVariant.info == variant && !outlined,
                'bg-warning text-white' : ButtonVariant.warning == variant && !outlined,
                'bg-danger text-white' : ButtonVariant.danger == variant && !outlined,
            
                // Outline
                'outline outline-2 bg-transparent' : outlined,
                'outline-secondary text-secondary' : ButtonVariant.default == variant && outlined,
                'outline-primary text-primary' : ButtonVariant.primary == variant && outlined,
                'outline-secondary' : ButtonVariant.secondary == variant && outlined,
                'outline-success text-success' : ButtonVariant.success == variant && outlined,
                'outline-info text-info' : ButtonVariant.info == variant && outlined,
                'outline-warning text-warning' : ButtonVariant.warning == variant && outlined,
                'outline-danger text-danger' : ButtonVariant.danger == variant && outlined,

                // Size
                'text-sm py-1.5 px-3' : ButtonSize.sm == size,
                'text-base px-4 py-2 ' : ButtonSize.md == size,

                //disabled
                'opacity-25' : disabled,

                //full
                'w-screen' : full
            })
        }>
            {getContent()}
        </button>
    )
}