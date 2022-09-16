import React, { useState,useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from 'classnames';
import { Dropdown } from '../Dropdown';
import { NavBarVariant } from '../../types'
export interface NavBarSubItems {
  label:string 
  router:string
} 
export interface NavBarItems {
    label:string 
    router:string
    subItems?:Array<NavBarSubItems>
} 

export interface StepsBreadcrumbItem {
    label:string 
    router:string
    onClick?:()=> void
} 

export interface IProps {
  navBarItems:Array<NavBarItems>
  variant?:NavBarVariant
}
export interface NavBarItemProps {
    router:string
    label:string
    index:number
    isExistiSubItems:boolean
} 
export const NavBar: React.FC<IProps> = ({ 
  navBarItems,
    variant = 'dark',
 }) => {
    const [optionsDropwdon,setOptionsDropwdon] = useState<Array<StepsBreadcrumbItem>>([])

    const handleRouter = (link:string)=> window.location.href = link 
    

   useEffect(()=>{
    const optionsDropwdonTemp:Array<StepsBreadcrumbItem> = []

    navBarItems?.map((step)=>{
      step.subItems?.map((subItems)=>{
        optionsDropwdonTemp.push({label:subItems?.label,router:subItems?.router, onClick:()=> handleRouter(subItems?.router)})

      })
    })
    
    setOptionsDropwdon(optionsDropwdonTemp)
   },[])
   
   
    const [indexStepCurrent,setIndexCurrent] = useState(-10)

    const NavBarItem = ({index,router,label,isExistiSubItems}:NavBarItemProps)=>{

        return(
          <li >
            <div className="flex items-center h-32" onClick={()=> setIndexCurrent(index)}>
              <a 
                href={router} 
                className={classname({
                  'flex items-center gap-2 ml-1 text-sm  hover:border-b-4  p-4  font-semibold ':true,
                  'text-secondaryL1':index == indexStepCurrent && variant == 'light',
                  'text-darkD2':index == indexStepCurrent && variant == 'dark',

                  // variant 
                  'text-white  hover:border-secondaryL2':variant == 'light',
                  'text-darkL1 hover:border-primaryL1 hover:text-darkD1':variant == 'dark',

                })}>
                  {label}
                  {isExistiSubItems && <Dropdown itemsMenu={optionsDropwdon} leftIcon="fa-solid fa-caret-down" variant="default" />}
                </a>
            </div>
            </li>
          )
    }

    return (
      <nav className="flex">
        <ol className="inline-flex items-center">
          {navBarItems?.map((step,index)=> <div key={index}> <NavBarItem index={index} label={step?.label} router={step?.router} isExistiSubItems={step?.subItems ? true:false}/></div>) }
        </ol>
     </nav>
    )
}