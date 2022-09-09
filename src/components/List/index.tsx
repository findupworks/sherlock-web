import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Sticker } from '../Sticker'
import { Label } from '../Label'
import { ListVariant } from '../../types';
import { Dropdown, DropdownItem } from '../Dropdown';
import { useState,useEffect } from 'react';

export interface ItemsListItem {
  title:string
  subTitle?:string 
  labelText?:string
  img?:string 
  icon?:string
  keyItem:any;
  dropDrownAction?:Array<DropdownItem>
  isAselectableItem?:boolean
  onClick?:(value)=> void
  onClickActionInfo?:(value)=> void 
  onClickActionDelete?:(value)=> void 
  onClickActionCopy?:(value)=> void 

}


export interface IProps {
  itemsList:Array<ItemsListItem>
  variant?:ListVariant
  onChangeItemsSelected?:(itemsSelected)=> void
}
export const List: React.FC<IProps> = ({ 
  itemsList,
  variant = 'group',
  onChangeItemsSelected,
    ...props
 }) => {
  const ItemList = ({
    title,
    subTitle,
    labelText,
    img,
    icon,
    dropDrownAction,
    isAselectableItem,
    onClickActionInfo,
    onClickActionDelete,
    onClick,
    onClickActionCopy,
    keyItem
  }:ItemsListItem)=>{

    const [showActions,setShowActions] = useState(false)
    const [itemsKeySelected,setItemsKeySelected] = useState<any>([]) 

    const Actions  = ()=>{
      
      if(showActions && isAselectableItem){
      return(
        <>
        <button onClick={()=>onClickActionInfo && onClickActionInfo(keyItem)}>
          <i className="fa-thin fa-info text-base"></i>
        </button>
        <button onClick={()=> onClickActionDelete && onClickActionDelete(keyItem)}>
          <i className="fa-regular fa-trash-can text-base"></i>
        </button>
        <button  onClick={()=> onClickActionCopy && onClickActionCopy(keyItem)}>
          <i className="fa-regular fa-copy text-base"></i>
        </button>
      </>
      )
      }
      return <></>
    }
 
    const handleItemSelected =   (key:any,isAselectableItem)=>{
      let listKeySelectedLocal = itemsKeySelected
      if(isAselectableItem){
          if(itemsKeySelected.includes(key)){
            listKeySelectedLocal = listKeySelectedLocal.filter((keyLocal)=> keyLocal != key );    
            setItemsKeySelected(listKeySelectedLocal)
          }else{
            setItemsKeySelected([...itemsKeySelected,key])
          }
        }else{
          if(!itemsKeySelected.includes(key)){    
            setItemsKeySelected([...itemsKeySelected,key])
          }
        }
    }
    useEffect(()=>{
    onChangeItemsSelected && onChangeItemsSelected(itemsKeySelected)
    },[itemsKeySelected])
 

   return (
    <div className={classname({
      'flex justify-between bg-white border  border-darkL2 p-4 items-start cursor-pointer':true,
       //variant list
       'mt-0 ':variant == 'group',
       'mt-4':variant == 'divider',

       ' bg-primaryL3':isAselectableItem && itemsKeySelected.includes(keyItem),

      })}
      onMouseOver={() =>  setShowActions(true)} 
      onMouseOut={() => setShowActions(false)}
      onClick={()=>{
        handleItemSelected(keyItem,isAselectableItem)
        onClick && onClick(keyItem)
      }}
      >

      <div className='flex items-start gap-4'>
          {isAselectableItem && <input type="checkbox" checked={itemsKeySelected.includes(keyItem) ? true:false} />}
          <div className='-translate-y-3'><Sticker img={img} icon={icon} /></div>
          <div>
            <h2 className={classname({
              'text-dark text-sm font-semibold':true,

              'text-darkL1':!isAselectableItem && itemsKeySelected.includes(keyItem)
              })}>
              {title}
            </h2>
            {labelText && <h3 className={classname({
              'font-normal text-sm text-secondary mb-1':true,
              'text-secondaryL1':!isAselectableItem && itemsKeySelected.includes(keyItem)
              })}>{subTitle}</h3>}
            {labelText && <Label size='sm' outlined variant='success' label={labelText} />}
           </div>
       </div>
       <div className='flex items-center gap-4'>
        <Actions />
        <Dropdown 
         itemsMenu={dropDrownAction ? dropDrownAction:[]} 
         leftIcon="fa-solid fa-ellipsis-vertical" 
         variant="default"
        />  
      </div>
    </div>
   )
  }

    return (
        <div className='w-[920px]'>
          {itemsList?.map((item)=>(
            <ItemList
               title={item?.title} 
               subTitle={item?.subTitle} 
               labelText={item?.labelText} 
               icon={item?.icon} 
               img={item?.img}
               isAselectableItem={item?.isAselectableItem}
               onClickActionInfo={item?.onClickActionInfo}  
               onClickActionDelete={item?.onClickActionDelete}  
               onClickActionCopy={item?.onClickActionCopy}  
               keyItem={item?.keyItem}
               />
           ))}
        </div>
    )
}