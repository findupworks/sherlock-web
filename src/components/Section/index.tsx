import React, { useState } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SizeVariant } from '../../types';

export interface SectionItem {
    label?: string;
    icon?: boolean;
    disabled?: boolean;
}

export interface IProps {
    items: SectionItem[],
    size: string;
}

export interface SectionProps {
    label?: string;
    index?: number;
    hasIcon?: boolean;
    disabled?: boolean;
}

export const Section: React.FC<IProps> = ({ 
    items,
    size,
    ...props
 }) => {

    // const [state, setState] = useState([]);

    return (
        <div className={
            classname({
                'max-w-[550px] min-w-[500px]' : 'sm' == size,
                'max-w-[750px] min-w-[700px]' : 'md' == size,
                'max-w-[900px] min-w-[850px]' : 'lg' == size,
            })}>
            {items.map((item, index) => {
              return <SectionItem label={item.label} index={index} hasIcon={!item.icon} disabled={item.disabled} />
           })}
        </div>
        
      );
}

export const SectionItem: React.FC<SectionProps> = ({ 
    label,
    hasIcon,
    disabled,
    index,
 }) => {

    const [openSection, setOpenSection] = useState('');
    const [showBodySection, setShowBodySection] = useState(false);

    function onClickSection(index) {
        if (index !== openSection) {
            setShowBodySection(true);
            setOpenSection(index);
        } else {
            setShowBodySection(false);
            setOpenSection('');
        }
    }

    return (
        <div className={
                classname({
                    'opacity-25' : disabled
                })}>
            <h1 className={ disabled || hasIcon ? 'pointer-events-none' : ''} onClick={() => onClickSection(index)}>
                <button type="button" className="flex disabled items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-secondaryL2">
                    <span className="text-secondary hover:text-dark">  { label } </span>
                    { hasIcon ? '' : <i className={`w-6 h-6 shrink-0 pl-2 pt-1 fas fa-${ index?.toString() == openSection ? 'angle-down' : 'angle-right' }`}></i>}
                </button>
            </h1>
            <div className={
                classname({
                    'hidden' : !showBodySection

                })}>
                <div className="p-5 font-light">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
            </div>
        </div>
    )   
 }
