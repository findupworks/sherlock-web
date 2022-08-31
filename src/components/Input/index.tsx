import React, { useState } from 'react';
import classNames from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';

export enum InputSize {
    sm = 'sm',
    lg = 'lg',
}

export enum InputType {
    default = 'default',
    textarea = 'textarea',
    selector = 'selector',
    icon = 'icon',
}

export interface SelectorItem {
    label?: string;
    value?: string;
}

export interface IProps {
    label?: string;
    placeholder?: string;
    size?: string;
    inputType: InputType;
    selectorItems: SelectorItem[],
    colorVariant?: ColorVariant,
    tag?: boolean;
    icon?: string;
    isVisible?: boolean;
    onClickIcon?: () => void;
}

export const Input: React.FC<IProps> = ({
    label,
    placeholder,
    size,
    inputType,
    colorVariant,
    selectorItems,
    tag,
    icon,
    isVisible,
    onClickIcon,
    ...props
 }) => {

    const [toggleIcon, setToggleIcon] = useState('eye');
    const [typeInput, setTypeInput] = useState('eye');

    function changleToggleIcon(){
        if(toggleIcon == 'eye'){
            setTypeInput('password');
            setToggleIcon('eye-slash');
        } else {
            setTypeInput('text');
            setToggleIcon('eye');
        }
    }

    function getTag(){
        return (
            tag ?
            <div className="flex items-center">
                <i className={
                    classNames(
                        "fa", {
                        "fa-circle-check text-success" : ColorVariant.success == colorVariant,
                        "fa-warning text-warning" : ColorVariant.warning == colorVariant,
                        "fa-circle-exclamation text-danger" : ColorVariant.danger == colorVariant,
                    })}>
                </i>
                <label className="block mb-2 pl-2 pt-2 text-sm font-medium text-gray-900 dark:text-dark">
                    { ColorVariant.success == colorVariant ? 'Sucesso' : '' }
                    { ColorVariant.danger == colorVariant ? 'Erro' : '' }
                    { ColorVariant.warning == colorVariant ? 'Cuidado' : '' }
                </label>
            </div> 
            : ''
        )
    }

    function getContentByType() {
        return <>
                {
                    InputType.textarea === inputType 
                    ? 
                    <div className="flex flex-col justify-center">
                        <div className="w-72">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{ label ? label : 'Label' }</label>
                            <textarea className={
                                    classNames(
                                        'resize w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid rounded transition ease-in-out m-0', {
                                        'h-24' : InputSize.sm == size,
                                        'h-36' : InputSize.lg == size,
                                        'bg-gray-50 border border-gray-300' : ColorVariant.default == colorVariant,
                                        'border-success bg-successL1 bg-opacity-10' : ColorVariant.success == colorVariant,
                                        'border-warning bg-warningL1 bg-opacity-10': ColorVariant.warning == colorVariant,
                                        'border-danger bg-dangerL1 bg-opacity-10' : ColorVariant.danger == colorVariant,
                                        'border-info bg-infoL1 bg-opacity-10' : ColorVariant.info == colorVariant,
                                        'border-primary bg-primaryL1 bg-opacity-10' : ColorVariant.primary == colorVariant,
                                        'border-secondary bg-secondaryL1 bg-opacity-10' : ColorVariant.secondary == colorVariant,
                                    })}
                                placeholder={placeholder ? placeholder : 'Your message'}
                            ></textarea>
                        </div>
                        {
                            getTag()
                        }
                    </div>
                    :
                    <div className="mb-6 relative">
                            {
                                InputType.icon == inputType ?
                                <>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{ label ? label : 'Label' }</label>
                                <div className="flex justify-between w-72">
                                    <input type="text" className={
                                        classNames(
                                            "border text-gray-900 text-sm rounded-md block w-72 p-3", {
                                            'h-8' : InputSize.sm == size,
                                            'bg-gray-50 border border-gray-300' : ColorVariant.default == colorVariant,
                                            'border-success bg-successL1 bg-opacity-10' : ColorVariant.success == colorVariant,
                                            'border-warning bg-warningL1 bg-opacity-10': ColorVariant.warning == colorVariant,
                                            'border-danger bg-dangerL1 bg-opacity-10' : ColorVariant.danger == colorVariant,
                                            'border-info bg-infoL1 bg-opacity-10' : ColorVariant.info == colorVariant,
                                            'border-primary bg-primaryL1 bg-opacity-10' : ColorVariant.primary == colorVariant,
                                            'border-secondary bg-secondaryL1 bg-opacity-10' : ColorVariant.secondary == colorVariant,
                                        })}
                                        placeholder={placeholder ? placeholder : 'Default text'}
                                    />
                                    <i onClick={onClickIcon} className={
                                        classNames(
                                            `absolute right-4 text-gray-600 fa fa-${icon}`, {
                                            'text-sm top-9' : InputSize.sm == size,
                                            'text-lg top-10' : InputSize.lg == size,
                                        })}></i>
                                </div>
                                {
                                    getTag()
                                }
                                </>
                                : ''
                            }
                            {
                                InputType.selector == inputType ? 
                                <>
                                    <div className="w-72">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{ label ? label : 'Label' }</label>
                                        <select className={
                                                classNames(
                                                    'text-gray-900 text-sm border rounded-lg block w-full p-2.5', {
                                                    'h-8' : InputSize.sm == size,
                                                    'bg-gray-50 border border-gray-300' : ColorVariant.default == colorVariant,
                                                    'border-success bg-successL1 bg-opacity-10' : ColorVariant.success == colorVariant,
                                                    'border-warning bg-warningL1 bg-opacity-10': ColorVariant.warning == colorVariant,
                                                    'border-danger bg-dangerL1 bg-opacity-10' : ColorVariant.danger == colorVariant,
                                                    'border-info bg-infoL1 bg-opacity-10' : ColorVariant.info == colorVariant,
                                                    'border-primary bg-primaryL1 bg-opacity-10' : ColorVariant.primary == colorVariant,
                                                    'border-secondary bg-secondaryL1 bg-opacity-10' : ColorVariant.secondary == colorVariant,
                                                })}
                                        >
                                            <option defaultValue={'-'} className="text-xs">-</option>
                                            {
                                                selectorItems ?
                                                selectorItems.map(item => (
                                                    <option value={item.value}>{item.label}</option>

                                                ))
                                                : ''
                                            }
                                        </select>
                                    </div>
                                </>
                                : ''
                            }
                    </div>
                }
            </>
    }

    function getContentDefault() {
        return <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{ label ? label : 'Label' }</label>
                    <div className={
                            classNames(
                                "flex relative justify-between w-72", {
                                'h-8' : InputSize.sm == size,
                                
                        })}>
                        <input type={typeInput} className={
                            classNames(
                                "border text-dark text-sm rounded-sm block w-72 p-3", {
                                'bg-gray-50 border border-gray-300' : ColorVariant.default == colorVariant,
                                'border-success bg-successL1 bg-opacity-10' : ColorVariant.success == colorVariant,
                                'border-warning bg-warningL1 bg-opacity-10': ColorVariant.warning == colorVariant,
                                'border-danger bg-dangerL1 bg-opacity-10' : ColorVariant.danger == colorVariant,
                                'border-info bg-infoL1 bg-opacity-10' : ColorVariant.info == colorVariant,
                                'border-primary bg-primaryL1 bg-opacity-10' : ColorVariant.primary == colorVariant,
                                'border-secondary bg-secondaryL1 bg-opacity-10' : ColorVariant.secondary == colorVariant,
                            })}
                            placeholder={placeholder ? placeholder : 'Defaul text'}
                        />
                        { isVisible ?
                            <i onClick={changleToggleIcon} className={`fa fa-${toggleIcon} right-3 top-3 text-lg absolute text-gray-600`}></i>
                            : ''
                        }
                    </div>
                    {
                        getTag()
                    }
                </div>
        }

    return (
        InputType.default == inputType ? getContentDefault() : getContentByType()
      );
}