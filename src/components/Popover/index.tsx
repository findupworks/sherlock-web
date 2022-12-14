import React, { useState } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePopper } from 'react-popper';
import { PopoverDirection } from '../../types';
export interface IProps {
    tooltipText: String,
    popoverText: String,
    showPopover: boolean,
    direction?: PopoverDirection,
    target: string,
}

export const Popover: React.FC<IProps> = ({ 
    tooltipText,
    popoverText,
    showPopover = false,
    direction = 'top',
    target,
    ...props
 }) => {

    const element = document.getElementById(target) as HTMLElement;
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
    const arrow = document.getElementById('arrow') as HTMLElement;

    const { styles, attributes } = usePopper(element, popperElement, {
       placement: direction,
       modifiers:[
        {
            name: "offset",
            options:{
                offset:[0, 8]
            }
        },
        {
            name: 'preventOverflow',
            options:{
                padding:8
            }
        },
        {
            name:"arrow",
            options:{
                element:arrow,
                padding:5,
            }
        }
       ]

    });

    return (
        <>
            {showPopover ? (
                <div className={classname({
                    'bg-slate-100 w-[256px]  min-h-[160px] z-20 rounded text-sm shadow-lg absolute ': true,
                    })}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                <div
                style={styles.arrow}
                 className={classname({
                    " h-0 w-0 border-slate-100": true,
                    "-top-1 border-x-[18px] border-x-transparent border-b-[16px] ": 'bottom' == direction,
                    "-bottom-1 border-x-[18px] border-x-transparent border-t-[16px]": 'top' == direction,
                    "-right-1 border-y-[9px] border-y-transparent border-l-[8px]": 'left' == direction,
                    "-left-1 border-y-[9px] border-y-transparent border-r-[8px]": 'right' == direction,
                })} id="arrow" />

                <div className=' font-semibold p-2 border-b border-slate-50 break-words'>
                    {tooltipText}
                </div>

                <div className='p-2 text-cyan break-words'>
                    {popoverText}
                </div>

                </div>): <div/>
            }
        </>
    )
}