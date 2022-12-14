import React, { useState, Fragment } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, SizeVariant } from '../../types';

export interface IProps {
    message: string,
    labelButtonCancel?:string,
    labelButtonConfirm?:string,
    size?: SizeVariant,
    variant?: ColorVariant,
    showConfirmationMessage:boolean,
    onCancel?: () => void,
    onConfirm?: () => void,
}

export const ConfirmationMessage: React.FC<IProps> = ({
    message,
    labelButtonCancel = 'Cancelar',
    labelButtonConfirm = 'Confirmar',
    size = 'md',
    variant = 'default',
    showConfirmationMessage = false,
    onCancel = undefined,
    onConfirm = undefined,
    ...props
 }) => {

    return (
        <>
          <div   className={classname({
            'bg-black opacity-70 fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50' :true,
             //visible
            'block': showConfirmationMessage,
            'hidden': !showConfirmationMessage
            })}></div>

            <div className={classname({
              'fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50' :true,
              //visible
              'block': showConfirmationMessage,
              'hidden': !showConfirmationMessage
              })}>
            <div  className={classname({
              'mx-auto w-full bg-white  mt-16 rounded drop-shadow-[0_4px_16px_rgba(39,40,51,0.4)]':true,
              //size 
              'max-w-[18.75rem]': 'sm' == size,
              'max-w-[31.25rem] min-w-[31.25rem]': 'md' == size,
              'max-w-[50rem] min-w-[50rem]': 'lg' == size
              })}>
              
              <div className='py-4 px-6 text-darkD1'>
                { message? message : 'Deleting portlet data before importing can’t be undone. Some applicatios in other page might be referencing this data. Are you sure you wan’t to continue deleteing portlet data?'}       
              </div>
              <footer className='flex justify-end p-6 gap-2'>
                { onCancel &&  <button className='py-2	px-4 text-secondary rounded border' onClick={onCancel}>{ labelButtonCancel }</button> }
                { onConfirm &&   <button onClick={onConfirm} className={classname({
                    'py-2 px-4 text-white rounded':true,
                  //variant 
                    'bg-primary': 'default' == variant,
                    'bg-danger' : 'danger' == variant,
                    'bg-success' : 'success' == variant,
                    'bg-warning' : 'warning' == variant,
                    'bg-info' : 'info' == variant,
                    })}>{ labelButtonConfirm }</button>
                }
              </footer>
              </div>
          </div>
        
        </>
    )
}