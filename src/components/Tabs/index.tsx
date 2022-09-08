import React, { useState } from 'react';
import classNames from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";

export interface MenuItem {
    label?: string;
    countLabel?: string;
    colorLabel?: string;
    icon?: string;
    dropdownOptions?: DropdownItem[]
}

export interface DropdownItem {
    label?: string;
}

export interface IProps {
    menuItems: MenuItem[],
    onTapMenu?: () => void;
    onClickDropdownOption?: () => void;
}

export const Tabs: React.FC<IProps> = ({ 
    menuItems,
    onTapMenu,
    onClickDropdownOption,
    ...props
 }) => {

    const [showEntries, setshowEntries] = useState<boolean>(false);
    
    return (
        <>

        <div className="text-sm relative font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {
                    menuItems.map(item => (
                        <>
                            <li className="mr-2">
                                <a onClick={onTapMenu} className={`text-${item.colorLabel} inline-block p-4 rounded-t-lg border-transparent border-b-2 hover:border-primary`}>
                                    { item.label } { item.countLabel ? `(${item.countLabel})` : ''}
                                </a>
                                
                                <i className={`fas fa-${item.icon} text-${item.colorLabel}` } onClick={() => setshowEntries(!showEntries)}></i>

                                {
                                    item.dropdownOptions ? 
                                        <div className={
                                            classNames(
                                                "absolute z-20 w-20 py-2 top-10 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
                                                'hidden' : !showEntries,
                                                'scale-100 opacity-100' : showEntries
                                        })}>
                                            { item.dropdownOptions.map(dropdownOption => (
                                                <p onClick={onClickDropdownOption} className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300">
                                                    { dropdownOption.label }
                                                </p>
                                            ))}
                                        </div>
                                    : ''
                                }
                                

                                
                            </li>

                            
                        </>
                    ))
                }
                
            </ul>
        </div>

        </>
    )
}