import React, { useEffect,useRef } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import { Button, ButtonSize } from '../Button';
import { useState } from 'react';


export enum  AlertTypes {
  alertFixed = 'alertFixed',
  alertTemporary = 'alertTemporary'
}
export interface IProps {
  
    variant?: ColorVariant
    text:string
    onHiden:()=> void
    onClickOne?:() => void 
    labelButtonOne?:string
    onClickTwo?:()=> void
    labelButtonTwo?:string
    showAlert:boolean
    onAlertBorderBottom?:boolean
}

export const Alert: React.FC<IProps> = ({ 
    variant = ColorVariant.default,
    onClickOne  = undefined,
    onClickTwo = undefined,
    labelButtonOne = "Small button",
    labelButtonTwo = 'Small button',
    onHiden,
    showAlert,
    onAlertBorderBottom = false,
    text,
    ...props
 }) => {

   const ref = useRef<HTMLDivElement>(null)


   const ButtonsActions = ()=>{

    
    const colorButton = ()=>{

        if(variant == ColorVariant.default){
          return ColorVariant.primary
        }
        if(variant == ColorVariant.info){
            return ColorVariant.info
          }
          if(variant == ColorVariant.success){
            return ColorVariant.success
          }
          if(variant == ColorVariant.warning){
            return ColorVariant.warning
          }
          if(variant == ColorVariant.danger){
            return ColorVariant.danger
          }
    }

    if(onClickOne || onClickTwo){
     return (
         <div className='flex items-center mt-4 gap-2 ml-8'>
            {onClickOne && (
              <Button label={labelButtonOne} onClick={onClickOne} size={ButtonSize.sm} variant={colorButton()}/>
            )}
            {onClickTwo && (
              <button>
                <Button label={labelButtonTwo} onClick={onClickTwo} size={ButtonSize.sm} variant={colorButton()} outlined  />
              </button>
              )  
            }
        </div>
       )
    }
   return <></>
 }

   const textAlert = ()=>{
    
    if(variant == ColorVariant.info){
      return 'Info:'  
    } 
    if(variant == ColorVariant.success){
      return 'Success:'
    }
    if(variant == ColorVariant.warning){
        return 'Warning:'
    }

    if(variant == ColorVariant.danger){
        return 'Danger:'
    }

   }

   
   useEffect(()=>{
    const divNode = ref?.current;
    if(!onClickOne && !onClickTwo){
      if(showAlert){
        divNode !== null && divNode.classList.remove("opacity-0")
        divNode !== null && divNode.classList.add("opacity-100")
        setTimeout(()=>{
           divNode !== null && divNode.classList.remove("opacity-100")
           divNode !== null && divNode.classList.add("opacity-0")
        },5000)
        setTimeout(()=>{  
            onHiden()
          },7000)
      }
    }
   },[showAlert])
   
  


   return (
       <div ref={ref} className={classname({

        'w-[24.5rem]  p-4 rounded break-words fixed top-4 right-4 z-50':true,
        // hidden  
        'ease-out duration-[4000ms] opacity-100  transition-opacity':!onClickOne && !onClickTwo,
    
         // variant
        'bg-white text-secondary':variant == ColorVariant.default,
        'bg-primaryL3 border-infoL1 text-info':variant == ColorVariant.info,
        'bg-successL2 border-successL1 text-success':variant == ColorVariant.success,
        'bg-warningL2 border-warningL1 text-warning':variant == ColorVariant.warning,
        'bg-dangerL2 border-dangerL1 text-danger':variant == ColorVariant.danger,
         
         // showAlert visible
        'block':showAlert,
        'hidden':!showAlert,

         'border':!onAlertBorderBottom,
         'border-b':onAlertBorderBottom,
         })}>
         <header className={classname({
             'flex items-start justify-between':true,
             })}>
            <div className='flex gap-2 items-start'>
              <i className={classname({
                'text-base mt-1':true,
                //icon type variant 
                'fa-solid fa-circle-check text-[#6B6C7E]':variant == ColorVariant.default,
                'fa-solid fa-circle-info':variant == ColorVariant.info,
                'fa-solid fa-circle-check':variant == ColorVariant.success, 
                'fa-solid fa-triangle-exclamation':variant == ColorVariant.warning,
                'fa-solid fa-circle-exclamation':variant == ColorVariant.danger
               })}></i>
             
                <span className='font-semibold text-sm flex items-start'>
                  {textAlert()}
                  <span className='ml-1 font-normal'>{text}</span>
                </span>              
            </div>
            <button onClick={onHiden}>
                <i className="fa-solid fa-xmark text-base ml-1"></i>
            </button>
         </header>
         <ButtonsActions />
       </div>
    )
}