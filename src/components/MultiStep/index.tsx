import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactLoading from 'react-loading';

export enum ButtonVariant {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    danger = 'danger',
    warning = 'warning',
}


export enum TypeOptions {
    type1 = 'type1',
    type2 = 'type2'
}

export interface StepsProps{
    label:string 
}

export interface ItemProps {
  label:string 
  step:number
}

export interface IProps{
 stepCurrent:number
 type:TypeOptions
 steps:Array<StepsProps>
}



export const MultiStep: React.FC<IProps> = ({ 
  steps,
  stepCurrent,
  type,
    ...props
 }) => {
 
   const Item = ({label,step}:ItemProps)=>{
  
    const content = ()=>{
    if (stepCurrent > step) return <i className="fa-solid fa-check text-white"></i>

     return step
        
    }
   
 

    return (
      <div className='text-center'>
      <div className='font-semibold	text-sm	text-secondary  mb-2 text-center'>{label}</div>
      <div className={classname({
         'flex items-center':true,

        //type 01
        'after:min-w-[2.75rem] after:w- after:h-1':TypeOptions.type1 == type,
        'before:min-w-[2.75rem] before:h-1':TypeOptions.type1 == type && step == 1,
         //type 01
        'after:w-11 after:h-1 ':TypeOptions.type2 == type,
        'after:w-0':TypeOptions.type2 == type && step == steps.length,

        // colors 
        'after:bg-secondary before:bg-secondary':stepCurrent > step,
        'after:bg-secondaryL3 before:bg-secondaryL3':stepCurrent < step,
        'before:bg-secondary after:bg-secondaryL3':stepCurrent == step && stepCurrent != steps.length,
        'after:bg-secondary':stepCurrent == steps.length
        })}>
          <div className={classname({
           'w-8 h-8 rounded-full flex justify-center items-center primary':true,
                
           'bg-primary text-white':stepCurrent ==  step, 
           'bg-secondary text-white':stepCurrent > step,
           'bg-secondaryL3 text-secondary':stepCurrent < step
            })}>
          {content()}
         </div>
       </div>
       </div>
    )
   }

const content = ()=>{
 
    return (
        <div className='flex items-center'>
          {steps.map((step,index)=> <Item label={step?.label} step={++index} />  )}
        </div>
    )
}

    return (
      content()
    )
}