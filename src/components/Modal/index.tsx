import React, { ReactNode} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import classname from 'classnames';
import { useDetectClickOutside } from 'react-detect-click-outside';
// p-10 mx-8 m-5 w-96 h-96
export enum ModalSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',

}

export interface IProps {
    title: string,
    variant?: ColorVariant,
    labelButtonCancel?:string 
    labelButtonConfirm?:string
    showModal:boolean
    size?:ModalSize
    onHide: () => void,
    onCancel?: () => void,
    onConfirm?: () => void,
    children?: ReactNode,
    icon ?: string,
}
export const Modal: React.FC<IProps> = ({ 
    title,
    size = ModalSize.md,
    variant = ColorVariant.default,
    showModal = false,
    children,
    labelButtonCancel = 'Cancelar',
    labelButtonConfirm = 'Confirmar',
    onHide,
    onCancel = undefined,
    onConfirm = undefined,
    icon,
    ...props
 }) => {

   const handleOnHide = (e:any)=>{
    if(e.target.classList.value.includes('fixed')) onHide!()

   }
  

    return (
        <>
          {/* backgroiund */}
          <div   className={classname({
            'bg-black opacity-70 fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50' :true,
             //visible
            'block':showModal,
            'hidden':!showModal
            })}></div>

            <div onClick={handleOnHide} className={classname({
              'fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50' :true,
              //visible
              'block':showModal,
              'hidden':!showModal
              })}>
            <div  className={classname({
              'mx-auto w-full bg-white  mt-16 rounded drop-shadow-[0_4px_16px_rgba(39,40,51,0.4)]':true,
              //size 
              'max-w-[18.75rem]':ModalSize.sm == size,
              'max-w-[31.25rem] min-w-[31.25rem]':ModalSize.md == size,
              'max-w-[50rem] min-w-[50rem]':ModalSize.lg == size
              })}>
              <header className={classname({
                'p-6  border-b-[1px] flex items-start justify-between rounded-t':true,
                //variant 
                'border-secondaryL3 text-dark':ColorVariant.default == variant,
                'border-danger bg-dangerL2 text-danger' : ColorVariant.danger == variant,
                'border-success text-success bg-successL2' : ColorVariant.success == variant,
                'border-warning text-warning bg-warningL2' : ColorVariant.warning == variant,
                'border-info text-info bg-infoL2' : ColorVariant.info == variant,
              })}>
                <h1>
                <i className={`fas fa-${icon} mr-2`}></i>
                <span className='font-bold text-xl'>{title}</span> 
                </h1>
                 <button onClick={onHide}><i className="fa-solid fa-xmark text-2xl"></i></button>
              </header>  
              <div className='py-4 px-6'>
                {children}           
              </div>
              <footer className='flex justify-end border-t-[1px] border-secondaryL3 p-6 gap-2'>
                {onCancel &&  <button className='border-[1px] border-secondaryL2 py-2	px-4 text-secondary rounded' onClick={onCancel}>{labelButtonCancel}</button> }
                { onConfirm &&   <button onClick={onConfirm} className={classname({
                  'py-2	px-4 text-white rounded':true,
                  //variant 
                'bg-primary':ColorVariant.default == variant,
                'bg-danger' : ColorVariant.danger == variant,
                'bg-success' : ColorVariant.success == variant,
                'bg-warning' : ColorVariant.warning == variant,
                'bg-info' : ColorVariant.info == variant,
                })}>{labelButtonConfirm}</button>
              }
              </footer>
              </div>   
          </div>
        
        </>
    )
}