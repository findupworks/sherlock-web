import React, {useState} from "react";
import { createPopper } from '@popperjs/core';
import classNames from "classnames";
import { useDetectClickOutside } from 'react-detect-click-outside';

export interface DropdownItem {
  label?: string;
  isDivider?: boolean;
  icon?: string;
  subLabel?: string;
  image?: string;

}

export interface IProps {
  label: string,
  items: DropdownItem[],
  leftIcon?: string,
  rightIcon?: string,
}

export const Dropdown: React.FC<IProps> = ({label, items,
  leftIcon,
    rightIcon, ...props}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) });

  const getIcon = (icon: string) => {
    return <i className={`fas fa-${icon}`}></i>
  }

  const getLeftIcon = () => {
      if(leftIcon) return getIcon(leftIcon);
  }

  const getRightIcon = () => {
      if (rightIcon) return getIcon(rightIcon);
  }

  const getSimple = (item: DropdownItem) => {
    return (
      <a href="#" className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300  ">
          {item.icon != undefined ? <i className={`fas fa-${item.icon}`}></i> : ''}
          
          <span className="mx-2">
            {item.label}
          </span>
      </a>
    )
  }

  const getDivider = () => <hr className="border-gray-200 dark:border-gray-700 " />

  return (
    <>
      <div className="flex items-center justify-center h-screen" ref={ref}>
        <div className="relative inline-block" >
            {/* <!-- Dropdown toggle button --> */}
            <button 
              className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md  focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring focus:outline-none"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {getLeftIcon()} {label} {getRightIcon()}
            </button>

            

            {/* <!-- Dropdown menu --> */}
            <div className={
              classNames(
                "absolute right-0 z-20  w-56  py-2 mt-2 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
                'hidden' : !showDropdown,
                'scale-100 opacity-100' : showDropdown
            })}>

                {/* <a href="#" onClick={() => alert('erick')} className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar" />
                    <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                    </div>
                </a> */}


              {
                items.map(item => (
                  <>
                    {item.isDivider ? getDivider() :  getSimple(item)}
                  </>
                ))
              }
            </div>
        </div>
    </div>
    </>
  );
};