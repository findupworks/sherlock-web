import React, { ReactNode} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import classname from 'classnames';

export enum ModalSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',

}

export enum VariantColorsModal {
  default = 'default',
  success = 'success',
  info = 'info',
  danger = 'danger',
  warning = 'warning',
}

export interface IProps {
    label: string,
    title: string,
    variant?: VariantColorsModal,
    labelButtonCancel:string 
    labelButtonConfirm:string
    showModal:boolean
    size:ModalSize
    onHide:()=> void
    onConfirm:()=> void
    children:ReactNode
}
export const Modal: React.FC<IProps> = ({ 
    title,
    label,
    size,
    variant = VariantColorsModal.default,
    showModal = false,
    children,
    labelButtonCancel,
    labelButtonConfirm,
    onHide,
    onConfirm,
    ...props
 }) => {
 
   const onHandleHidden = (e:any)=>{
    if(e.target.classList.value.includes('fixed')){
      onHide()
    }
   }

    return (
        <div onClick={onHandleHidden} className={classname({
            'bg-lightL1  fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50' :true,
             //visible
            'block':showModal,
            'hidden':!showModal
            })}>
         <div className={classname({
          'mx-auto w-full bg-white  mt-16 rounded drop-shadow-[0_4px_16px_rgba(39,40,51,0.4)]':true,
          //size 
          'max-w-[18.75rem]':ModalSize.sm == size,
          'max-w-[31.25rem] min-w-[31.25rem]':ModalSize.md == size,
          'max-w-[50rem] min-w-[50rem]':ModalSize.lg == size
          })}>
          <header className={classname({
            'p-6  border-b-[1px] flex items-start justify-between rounded-t':true,
             //variant 
            'border-secondaryL3 text-dark':VariantColorsModal.default == variant,
            'border-danger bg-dangerL2 text-danger' : VariantColorsModal.danger == variant,
            'border-success text-success bg-successL2' : VariantColorsModal.success == variant,
            'border-warning text-warning bg-warningL2' : VariantColorsModal.warning == variant,
            'border-info text-info bg-infoL2' : VariantColorsModal.info == variant,
          })}>
            <h1>
            <i className={classname({
                   "mr-2":true,
                    // variant 
                   'fa-solid fa-circle-info':VariantColorsModal.default == variant ||  VariantColorsModal.info == variant || VariantColorsModal.danger == variant ,
                   'fa-solid fa-circle-check' : VariantColorsModal.success == variant,
                   'fa-solid fa-triangle-exclamation' : VariantColorsModal.warning == variant,
                  })}></i>
             <span className='font-bold text-xl'>{title}</span> 
            </h1>
            <button onClick={onHide}>
                  <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
          </header>  
          <div className='py-4 px-6'>
            {children}           
          </div>
          <footer className='flex justify-end border-t-[1px] border-secondaryL3 p-6 gap-2'>
            <button className='border-[1px] border-secondaryL2 py-2	px-4 text-secondary rounded' onClick={onHide}>{labelButtonCancel}</button>
            <button onClick={onConfirm} className={classname({
              'py-2	px-4 text-white rounded':true,
              //variant 
             'bg-primary':VariantColorsModal.default == variant,
             'bg-danger' : VariantColorsModal.danger == variant,
             'bg-success' : VariantColorsModal.success == variant,
             'bg-warning' : VariantColorsModal.warning == variant,
             'bg-info' : VariantColorsModal.info == variant,
            })}>{labelButtonConfirm}</button>
          </footer>
          </div>   
        </div>
    )
}