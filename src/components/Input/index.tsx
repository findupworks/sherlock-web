import React, { useState, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SizeVariant, InputTypeVariant  } from '../../types';

export interface SelectorItem {
    label?: string;
    value?: string;
}


export type IProps = InputHTMLAttributes<HTMLInputElement> &  {
    label?: string;
    size?: SizeVariant;
    inputType: InputTypeVariant;
    selectorItems?: SelectorItem[],
    colorVariant?: ColorVariant,
    tag?: boolean;
    icon?: string;
    isVisible?: boolean;
    onClickIcon?: () => void;
}

export const Input: React.FC<IProps> = ({
    label,
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
                        "fa-circle-check text-success" : 'success' == colorVariant,
                        "fa-warning text-warning" : 'warning' == colorVariant,
                        "fa-circle-exclamation text-danger" : 'danger' == colorVariant,
                    })}>
                </i>
                <label className="block mb-2 pl-2 pt-2 text-sm font-medium text-gray-900 dark:text-dark">
                    { 'success' == colorVariant ? 'Sucesso' : '' }
                    { 'danger' == colorVariant ? 'Erro' : '' }
                    { 'warning' == colorVariant ? 'Cuidado' : '' }
                </label>
            </div> 
            : ''
        )
    }

    function getContentByType() {
        return <>
                {
                    'textarea' === inputType 
                    ? 
                    <div className="flex flex-col justify-center">
                        <div className="w-72">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{ label ? label : 'Label' }</label>
                            <textarea className={
                                    classNames(
                                        'resize w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid rounded transition ease-in-out m-0', {
                                        'h-24' : 'sm' == size,
                                        'h-36' : 'lg' == size,
                                        'bg-gray-50 border border-gray-300' : 'default' == colorVariant,
                                        'border-success bg-successL1 bg-opacity-10' : 'success' == colorVariant,
                                        'border-warning bg-warningL1 bg-opacity-10': 'warning' == colorVariant,
                                        'border-danger bg-dangerL1 bg-opacity-10' : 'danger' == colorVariant,
                                        'border-info bg-infoL1 bg-opacity-10' : 'info' == colorVariant,
                                        'border-primary bg-primaryL1 bg-opacity-10' : 'primary' == colorVariant,
                                        'border-secondary bg-secondaryL1 bg-opacity-10' : 'secondary' == colorVariant,
                                    })}
                            ></textarea>
                        </div>
                        {
                            getTag()
                        }
                    </div>
                    :
                    <div className="mb-6 relative">
                            {
                                'icon' == inputType ?
                                <>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{ label ? label : 'Label' }</label>
                                <div className="flex justify-between w-72">
                                    <input type="text" className={
                                        classNames(
                                            "border text-gray-900 text-sm rounded-md block w-72 p-3", {
                                            'h-8' : 'sm' == size,
                                            'bg-gray-50 border border-gray-300' : 'default' == colorVariant,
                                            'border-success bg-successL1 bg-opacity-10' : 'success' == colorVariant,
                                            'border-warning bg-warningL1 bg-opacity-10': 'warning' == colorVariant,
                                            'border-danger bg-dangerL1 bg-opacity-10' : 'danger' == colorVariant,
                                            'border-info bg-infoL1 bg-opacity-10' : 'info' == colorVariant,
                                            'border-primary bg-primaryL1 bg-opacity-10' : 'primary' == colorVariant,
                                            'border-secondary bg-secondaryL1 bg-opacity-10' : 'secondary' == colorVariant,
                                        })}
                                        {...props}
                                    />
                                    <i onClick={onClickIcon} className={
                                        classNames(
                                            `absolute right-4 text-gray-600 fa fa-${icon}`, {
                                            'text-sm top-9' : 'sm' == size,
                                            'text-lg top-10' : 'lg' == size,
                                        })}></i>
                                </div>
                                {
                                    getTag()
                                }
                                </>
                                : ''
                            }
                            {
                                'selector' == inputType ? 
                                <>
                                    <div className="w-72">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{ label ? label : 'Label' }</label>
                                        <select className={
                                                classNames(
                                                    'text-gray-900 text-sm border rounded-lg block w-full p-2.5', {
                                                    'h-8' : 'sm' == size,
                                                    'bg-gray-50 border border-gray-300' : 'default' == colorVariant,
                                                    'border-success bg-successL1 bg-opacity-10' : 'success' == colorVariant,
                                                    'border-warning bg-warningL1 bg-opacity-10': 'warning' == colorVariant,
                                                    'border-danger bg-dangerL1 bg-opacity-10' : 'danger' == colorVariant,
                                                    'border-info bg-infoL1 bg-opacity-10' : 'info' == colorVariant,
                                                    'border-primary bg-primaryL1 bg-opacity-10' : 'primary' == colorVariant,
                                                    'border-secondary bg-secondaryL1 bg-opacity-10' : 'secondary' == colorVariant,
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
                                'h-8' : 'sm' == size,
                                
                        })}>
                        <input type={typeInput} className={
                            classNames(
                                "border text-dark text-sm rounded-sm block w-72 p-3", {
                                'bg-gray-50 border border-gray-300' : 'default' == colorVariant,
                                'border-success bg-successL1 bg-opacity-10' : 'success' == colorVariant,
                                'border-warning bg-warningL1 bg-opacity-10': 'warning' == colorVariant,
                                'border-danger bg-dangerL1 bg-opacity-10' : 'danger' == colorVariant,
                                'border-info bg-infoL1 bg-opacity-10' : 'info' == colorVariant,
                                'border-primary bg-primaryL1 bg-opacity-10' : 'primary' == colorVariant,
                                'border-secondary bg-secondaryL1 bg-opacity-10' : 'secondary' == colorVariant,
                            })}
                            {...props}
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
        'default' == inputType ? getContentDefault() : getContentByType()
      );
}