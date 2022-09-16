import React, { useState,useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from 'classnames';
import { Dropdown } from '../Dropdown';
export interface NavBarVerticalSubItems {
  label:string 
  router:string
} 
export interface NavBarVerticalItems {
    label:string 
    router:string
    subItems?:Array<NavBarVerticalSubItems>
} 

export interface NavbarVerticalItem {
    label:string 
    router:string
    onClick?:()=> void
} 

export interface IProps {
  navBarItems:Array<NavBarVerticalItems>
}
export interface NavBarItemProps {
    router:string
    label:string
    index:number
    subItems:Array<NavBarVerticalItems>
} 
export const NavBarVertical: React.FC<IProps> = ({ 
  navBarItems,
 }) => {
    const [optionsDropwdon,setOptionsDropwdon] = useState<Array<NavbarVerticalItem>>([])
    const [indexStepCurrent,setIndexCurrent] = useState(-10)
    const [indexStepCurrentSubItem,setIndexStepCurrentSubItem] = useState(-10)
    const [showSubItems,setShowSubItems] = useState(false)
    
  

    
    const NavBarItem = ({index,router,label,subItems}:NavBarItemProps)=>{

        return(
          <li className='mb-6'>
            <div className={classname({
               'flex cursor-pointer   items-center justify-between gap-4 ml-1 rounded text-sm py-2 px-4 text-dark hover:bg-darkL2':true,   
                
                
                'text-darkD2 text-sm font-semibold':index == indexStepCurrent && showSubItems

                })} 
                 onClick={()=> {
                    setIndexCurrent(index)
                    setShowSubItems(!showSubItems)
                  }}>
               <a href={router} >
                  {label}
                </a>
                {subItems?.length > 0 ? showSubItems && index == indexStepCurrent ? <i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-right"></i>:null}
              </div>
              <div className='mt-2'>
                {subItems?.length > 0 && index == indexStepCurrent && showSubItems && subItems?.map((subItem,index)=>(
                  <a className={classname({
                    'block cursor-pointer  ml-4 rounded text-sm py-2 px-4 text-dark hover:bg-light mb-3':true, 
                    'bg-primaryL3 text-primary font-semibold':index == indexStepCurrentSubItem  
                     })}  
                     href={subItem?.router}
                     onClick={()=> setIndexStepCurrentSubItem(index)}
                     >
                      {subItem?.label}
                  </a>
                )) }

              </div>
              

            </li>
          )
    }

    return (
      <nav>
        <ol>
          {navBarItems?.map((item,index)=> <div key={index}> <NavBarItem index={index} label={item?.label} router={item?.router} subItems={item?.subItems ? item?.subItems:[]}/></div>) }
        </ol>
     </nav>
    )
}