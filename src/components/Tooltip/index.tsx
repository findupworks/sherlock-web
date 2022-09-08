import React, { useState } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePopper } from 'react-popper';
import { TooltipDirection } from '../../types';

export interface IProps {
    tooltipText: String,
    direction?: TooltipDirection,
    target: string,
}

export interface ArrowProps {
    direction: TooltipDirection,
}

export const Tooltip: React.FC<IProps> = ({ 
    tooltipText,
    direction = 'top',
    target,
    ...props
 }) => {

    const element = document.getElementById(target) as HTMLElement;
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();

    const toolTip = document.querySelector(`#${target}`)

    const arrow = document.getElementById('arrow') as HTMLElement;

    const { styles, attributes, update } = usePopper(element, popperElement, {
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
            name:'arrow',
            options:{
                element:arrow,
                padding:5,
                
            }
        }
       ]

    });

    function show() {
        toolTip?.setAttribute('data-show', '');
        popperElement?.classList.add("block");
        popperElement?.classList.remove("hidden")
        
        if(update){
            update();
        }
      }
      
      function hide() {
        toolTip?.removeAttribute('data-show');
        popperElement?.classList.add("hidden");
        popperElement?.classList.remove("block")
      }
      
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];
      
      showEvents.forEach((event) => {
        toolTip?.addEventListener(event, show);
      });
      
      hideEvents.forEach((event) => {
        toolTip?.addEventListener(event, hide);
      });

    return (
    <>
            <div className={classname({
                'bg-darkD2 w-[94px] h-[3/7px] z-20 rounded text-sm shadow-lg absolute break-words hidden': true,
                })}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                id="tooltip"
            >
                <div 
                    style={styles.arrow}
                    className={classname({
                        "h-0 w-0 border-darkD2": true,
                        " -top-1 border-x-[18px] border-x-transparent border-b-[16px]": 'bottom' == direction || 'bottom-start' == direction || 'bottom-end' == direction,
                        " -bottom-1 border-x-[18px] border-x-transparent border-t-[16px]": 'top' == direction || 'top-start' == direction || 'top-end' == direction,
                        "-right-1 border-y-[9px] border-y-transparent border-l-[8px]": 'left' == direction || 'left-start' == direction || 'left-end' == direction,
                        "-left-1 border-y-[9px] border-y-transparent border-r-[8px]": 'right' == direction || 'right-start' == direction || 'right-end' == direction,
                    })} 
                    id="arrow" 
                />

                <div className=' p-2 text-white'>
                    {tooltipText}
                </div>

            </div>
        </>
    )
}