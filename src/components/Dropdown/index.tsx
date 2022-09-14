import React, {useState} from "react";
import classname from "classnames";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Button } from "../Button";
import { DropwdonVariant, InputDropdownVariant } from "../../types";

export interface SubItem {
  label:string
  isDivider?: boolean;
  value:any
  onClick?:()=> void
  checked?:boolean
}

export interface DropdownItem {
  label: string;
  isDivider?: boolean;
  icon?: string;
  value?:any
  subItens?:Array<SubItem>
  isTitleFilterBy?:boolean
  typeInput?: InputDropdownVariant
  onClickActionRight?:()=> void
  onClick?:()=> void,
  checked?:boolean
}

export interface IProps {
  label?: string,
  itemsMenu: DropdownItem[],
  leftIcon?: string,
  rightIcon?: string,
  onClickButtonDropwdon?:(event)=> void
  onChange?:(event:any,item:DropdownItem,index:number,isSubItem:boolean)=> void
  labelButtonDropdown?:string
  variant:DropwdonVariant
  isSearch?:boolean
}

export const Dropdown: React.FC<IProps> = ({
  label, 
  itemsMenu,
  leftIcon,
  rightIcon, 
  onClickButtonDropwdon = undefined,
  onChange = undefined,
  labelButtonDropdown = "Apply",
  variant = "default",
  isSearch = false,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) });
  const [search,setSearch] = useState("")
  const [dropdownItemIndexSelected,SetDropdownItemIndexSelected] = useState('')
 

  const icon = (icon: string) => {
    return <i className={`fas fa-${icon}`}></i>
  }

  const getLeftIcon = () => {
      if(leftIcon) return icon(leftIcon);
  }

  const getRightIcon = () => {
      if (rightIcon) return icon(rightIcon);
  }


  const toggleContentSubItens  = (index)=>{

    if(index != dropdownItemIndexSelected){
      SetDropdownItemIndexSelected(index)
    }else{
      SetDropdownItemIndexSelected('')
    }
  }


  const getSubItem = (subItem:SubItem,index:number)=>{
      
 
   return (
      <label htmlFor={subItem?.value} className="flex gap-2 text-dark hover:bg-darkL2 mt-2 cursor-pointer" >
         <input
          type="checkbox" 
          id={subItem?.value} 
          name="base" 
          checked={subItem?.checked} 
          value={subItem?.value} 
          onChange={(event)=> onChange && onChange(event,subItem,index,true)} />
         {subItem.label}
      </label>
   )
  }

 


  const getDefault = (item:DropdownItem) => {
    return (
      <div className={classname({
        "w-full p-3 text-sm text-dark capitalize transition-colors duration-200 transform  hover:bg-darkL2 cursor-pointer":true,

        //isDivider
        "border-b border-darkL1":item?.isDivider

        })}
        onClick={item?.onClick}

        >

      <div  className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mx-2">
            {item?.label}
          </span>      
        </div>  
         {item?.onClickActionRight && <button onClick={item?.onClickActionRight} ><i className="fa-solid fa-chevron-right"></i></button>}
        </div>
      </div>

    )
  }

  const getIcon = (item:DropdownItem) => {

    return (
      <div className={classname({
        "w-full p-3 text-sm text-dark capitalize transition-colors duration-200 transform  hover:bg-darkL2 cursor-pointer":true,

        //isDivider
        "border-b border-darkL1":item?.isDivider
        
        })}>

      <div  className="flex items-center justify-between">
        <div className="flex items-center">
           {item?.icon && <i className={`fas fa-${item?.icon}`}></i>}
          <span className="mx-2">
            {item?.label}
          </span>      
        </div>  
         {item?.onClickActionRight && <button onClick={item?.onClickActionRight} ><i className="fa-solid fa-chevron-right"></i></button>}
        </div>
      </div>

    )
  }


  const getRadio  = (item: DropdownItem,index:number)=>{


    return (
      <div>
       {item?.isTitleFilterBy && <div className="font-semibold text-xs text-dark mt-5 ml-2">Filter By</div>} 
       <div className={classname({
        "flex items-center w-full justify-between p-3 text-sm text-dark capitalize transition-colors duration-200 transform hover:bg-darkL2 cursor-pointer":true,

         // isDiviter
        "border-b border-darkL1":item.isDivider
        })} onChange={(event)=> onChange && onChange(event,item,index,false)}>
         <label htmlFor={item?.value} className="flex gap-2">
           <input type="radio" id={item?.value} name="base" value={item?.value} checked={item?.checked} />
           {item?.label}
         </label>
         {item?.onClickActionRight && <button onClick={item?.onClickActionRight} ><i className="fa-solid fa-chevron-right"></i></button>}
        </div>
      </div>
     
    )
  }
  const getCheckBox  = (item: DropdownItem,index?:String)=>{

    const arrowActionRight = ()=>{
      if(item?.onClickActionRight){
        if(item?.subItens && item?.subItens?.length > 0){
          return(
            <i className={`fa-solid fa-${dropdownItemIndexSelected == index  ? 'angle-down':'chevron-right'}`}></i>
          )
        }
        return (
          <button onClick={item?.onClickActionRight}>
              <i className={'fa-solid fa-chevron-right'}></i>
          </button>
         )
      }
     return <></>
    }

    return (
    <div   className={classname({
      "border-b border-darkL1":item?.isDivider

      })}>
        {item?.isTitleFilterBy && <div className="font-semibold text-xs text-dark mt-5 ml-2">Filter By</div>} 
         <div 
           className= "flex items-center w-full justify-between text-sm p-3 text-dark capitalize transition-colors duration-200 transform  hover:bg-darkL2 cursor-pointer" 
           onClick={()=> toggleContentSubItens(index)}
           >
           <div className="flex gap-2">
            <input
              type="checkbox" 
              id={item?.value} 
              checked={item?.checked} 
              value={item?.value} 
              onChange={(event)=> onChange && onChange(event,item,Number(index),false)} />
            <span>{item?.label}</span> 
         </div>
         {arrowActionRight()}
      </div>
      {item?.subItens && item?.subItens?.length > 0 &&
        <div className={classname({
          "w-full justify-between text-sm text-dark capitalize transition-colors duration-200 transform  p-4":true,
          "block":dropdownItemIndexSelected == index,
          "hidden":dropdownItemIndexSelected != index,

          })}>
        {item?.subItens.map((subItem,index)=> getSubItem(subItem,index))}
      </div>
      }
    </div>
  
    )
  }

  const getFilter  = (item: DropdownItem,index:string)=>{
  
      if(item?.typeInput == 'checkbox'){
         return  getCheckBox(item,index)
      }
      if(item?.typeInput == 'radio') { 
        return getRadio(item,Number(index))
      }
      
     return <></>

  }



const variantTypeCheck =  (item: DropdownItem,index:number)=>{

  if(variant === "default"){
   return getDefault(item)
  }
  if(variant === "icon"){
    return getIcon(item)
   }
  
  if(variant === "checkbox"){
    return getCheckBox(item,String(index))
   }
   if(variant === "radio"){
    return getRadio(item,index)
   }
   if(variant === "filter"){
    return getFilter(item,String(index))
   }
}
 

// search
const listFilter =  itemsMenu?.filter((item)=> item?.label?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
 

  return (
    <>
    <div className="flex items-center justify-center" ref={ref}>
      <div className="relative inline-block" >
          {/* <!-- Dropdown toggle button --> */}
          <button 
            className="relative z-10 block p-2 text-dark bg-white border border-transparent rounded-md  focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {getLeftIcon()} {label} {getRightIcon()}
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className={
            classname(
              "absolute right-0 z-20  w-56  py-2 mt-2 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
              'hidden' : !showDropdown,
              'scale-100 opacity-100' : showDropdown
          })}>
            {isSearch && 
            <div className="relative">
              <input
                type="text" 
                className="bg-light border-none outline-none w-[97%] m-1 py-1.5	px-3 rounded text-dark" 
                onChange={(e)=> setSearch(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-4 text-dark"></i>
            </div>
             }
             {listFilter.map((item,index)=> variantTypeCheck(item,index))}
            <div className="mt-4">
              {onClickButtonDropwdon && <Button label={labelButtonDropdown} full variant={'primary'} onClick={onClickButtonDropwdon} />}
            </div>
          </div>
      </div>
  </div>
  </>
  );
};