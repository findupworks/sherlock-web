import React,{ButtonHTMLAttributes} from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';
import { ColorVariant } from '../../types';

export enum ButtonSize {
    sm = 'sm',
    md = 'md',
}

export type IProps = ButtonHTMLAttributes<HTMLButtonElement> &  {
    outlined?: boolean;
    full?: boolean;
    loading?: boolean;
    disabled?: boolean;
    label: string,
    variant?: ColorVariant
    size?: ButtonSize,
    leftIcon?: string,
    rightIcon?: string,
    textButton?:boolean
}

export const Button: React.FC<IProps> = ({ 
    label,
    leftIcon,
    rightIcon,
    disabled = false,
    outlined = false,
    loading = false,
    size = ButtonSize.md,
    variant = ColorVariant.default,
    full = false,
    textButton = false,
    ...props
 }) => {
    

    const getIcon = (icon: string) => {
        return <i className={`fas fa-${icon}`}></i>
    }

    const getLeftIcon = () => {
        if(leftIcon) return getIcon(leftIcon);
    }

    const getRightIcon = () => {
        if (rightIcon) return getIcon(rightIcon);
    }

    const getLoading = () => <ReactLoading type='spin' color='#D9D9D9' height={"20px"} width={"20px"}/>;

    const getRealContent = () => <span>{getLeftIcon()} <span className='px-2'>{label}</span>{getRightIcon()}</span>

    const getContent = () => {
        if(loading) {
            return getLoading();
        }

        return getRealContent();
    }

    return (
        <button disabled={disabled} 
        {...props}
        className={
            classname({
                'font-bold rounded  mr-1 mb-1 ease-linear transition-all duration-150 text-center flex items-center justify-center' :  true,
                // Outline none
                'bg-secondary text-white hover:bg-secondaryD1 active:bg-secondaryL1' : ColorVariant.default == variant && !outlined && !textButton || ColorVariant.secondary == variant && !outlined && !textButton,
                'bg-primary text-white hover:bg-primaryD1 active:bg-primaryL1' : ColorVariant.primary == variant && !outlined && !textButton,
                'bg-success text-white hover:bg-successD1 active:bg-successL1' : ColorVariant.success == variant && !outlined && !textButton,
                'bg-info text-white hover:bg-infoD1 active:bg-infoL1': ColorVariant.info == variant && !outlined && !textButton,
                'bg-warning text-white hover:bg-warningD1 active:bg-warningL1': ColorVariant.warning == variant && !outlined && !textButton,
                'bg-danger text-white hover:bg-dangerD1 active:bg-dangerL1' : ColorVariant.danger == variant && !outlined && !textButton,
            
                // Outline
                'outline outline-2 bg-transparent' : outlined && !textButton,
                'outline-secondary text-secondary hover:bg-secondaryD1 hover:text-white active:bg-secondaryL1 active:outline-secondaryL1 active:text-white' : ColorVariant.default == variant  && outlined && !textButton  || ColorVariant.secondary == variant  && outlined && !textButton,
                'outline-primary text-primary hover:bg-primaryD1 hover:outline-primaryD1 hover:text-white active:bg-primaryL1 active:outline-primaryL1 active:text-white' : ColorVariant.primary == variant && outlined && !textButton,
                'outline-success text-success hover:bg-successD1 hover:outline-successD1 hover:text-white active:bg-successL1 active:outline-successL1 active:text-white' : ColorVariant.success == variant && outlined && !textButton,
                'outline-info text-info hover:bg-infoD1 hover:outline-infoD1 hover:text-white active:bg-infoL1 active:outline-infoL1 active:text-white' : ColorVariant.info == variant && outlined && !textButton,
                'outline-warning text-warning hover:bg-warningD1 hover:outline-warningD1 hover:text-white active:bg-warningL1 active:outline-warningL1 active:text-white' : ColorVariant.warning == variant && outlined && !textButton,
                'outline-danger text-danger hover:bg-dangerD1 hover:outline-dangerD1 hover:text-white active:bg-dangerL1 active:outline-dangerL1 active:text-white' : ColorVariant.danger == variant && outlined && !textButton,
    
                //textButton
                'text-secondary hover:text-secondaryD1 active:text-secondaryL1' : ColorVariant.default == variant && textButton || ColorVariant.secondary == variant && textButton,
                'text-primary hover:text-primaryD1 active:text-primaryL1' : ColorVariant.primary == variant && textButton,
                'text-success hover:text-successD1 active:text-successL1' : ColorVariant.success == variant && textButton,
                'text-info hover:text-infoD1 active:text-infoL1': ColorVariant.info == variant && textButton,
                'text-warning hover:text-warningD1 active:text-warningL1': ColorVariant.warning == variant && textButton,
                'text-danger  hover:text-dangerD1 active:text-dangerL1' : ColorVariant.danger == variant && textButton,
            

                // Size
                'text-sm py-1.5 px-3' : ButtonSize.sm == size,
                'text-base py-2 px-4' : ButtonSize.md == size,

                'opacity-25' : disabled,

                'w-full overflow-hidden' : full
            })
        }>
            {getContent()}
        </button>
    )
}