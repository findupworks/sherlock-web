import React, { useState, Fragment } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SizeVariant, } from '../../types';
export interface IPropsCardNavigation {
    iconCard: string;
    title: string,
    body: string,
    size?: SizeVariant,
    variant?: SizeVariant
}

export const CardNavigation: React.FC<IPropsCardNavigation> = ({
    iconCard,
    title,
    body,
    size = 'md',
    variant = 'default',
    ...props
 }) => {

    function getIcon() {
        return iconCard ? iconCard : 'image'
    }

    function getDefault() {
        return <div className={
            classname({
                'rounded shadow-lg justify-between flex-col bg-white box-content border-b-4 hover hover:border-primary' : true,

                'max-w-[230px] w-[220px] min-w-[166px] min-h-[145px]' : 'sm' == size,
                'max-w-[294px] min-w-[230px] min-h-[200px]' : 'md' == size,
                'max-w-[358px] min-w-[294px] min-h-[253px]' : 'lg' == size,

                'hover:bg-light' : true
            })}>
            
            <div className="rounded justify-center flex items-center">
                
                <i className={
                    classname(`fa-solid fa-${getIcon()} text-dark `,{
                        'fa-3x m-8' : 'sm' == size,
                        'fa-4x m-10' : 'md' == size,
                        'fa-5x m-12' : 'lg' == size
                    })}>
                </i>

            </div>

            <div className="justify-center items-center px-4 py-2">
                <p className="text-base text-center break-all">
                    { title ? title : 'Card Title' }
                </p>
                <p className="text-darkD1 text-center mt-2 mb-4 break-all"> 
                    { body ? body : 'Build a page using page fragments and edit content inline.' }
                </p>
                
            </div>

        </div>
    }

    function getSmall() {
        return <div className={
            classname({
                'rounded shadow-lg bg-white box-content border-b-4 hover hover:border-primary' : true,

                'max-w-[230px] w-[200px] min-w-[166px] min-h-[49px]' : 'sm' == size,
                'max-w-[294px] min-w-[240px] min-h-[60px]' : 'md' == size,
                'max-w-[358px] min-w-[294px] min-h-[65px]' : 'lg' == size,

                'hover:bg-light' : true
            })}>
            
            <div className="rounded flex py-4">
                
                <i className={
                    classname(`fa-solid fa-${getIcon()} text-dark fa-2x ml-4`, {

                    })}>
                </i>

                <p className="text-base text-center break-all pt-1 pr-4 pl-4">
                    { title ? title : 'Content page' }
                </p>

            </div>

        </div>
    }

    return (
        variant === 'default' ? getDefault() : getSmall()
    )
}