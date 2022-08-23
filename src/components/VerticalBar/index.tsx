import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";


export interface IconsItem {
    iconType: string;
    divider?: boolean;
}

export interface IProps {
    icons: IconsItem[],
    iconsColor?: string,
    barColor?: string,
    onClick: () => void;
}

export const VerticalBar: React.FC<IProps> = ({ 
    icons,
    iconsColor,
    barColor,
    onClick,
    ...props
 }) => {
    
    return (
        <>
            <aside className="w-30">
                <div className="overflow-y-auto py-4 px-3 rounded" style={{ background: barColor ? barColor : 'white' }}>
                    <ul className="space-y-2">
                        { 
                            icons.map(icon => (
                                <>

                                    { icon.divider ? 
                                        <ul className="space-y-2 border-t border-gray-200 dark:border-gray-700"></ul> 
                                        : ''}
                                        
                                    <li onClick={onClick}>
                                        <a className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`} style={{ color: iconsColor ? iconsColor : 'white' }}>
                                            <i className={`fa fa-${icon.iconType}`}></i>
                                        </a>
                                    </li>
                                </>
                                
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>

    )
}