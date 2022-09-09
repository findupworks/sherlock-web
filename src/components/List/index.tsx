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
  variant?:string
  dropDrownAction?:Array<DropdownItem>
  isAselectableItem?:boolean
  onClick?:(value)=> void
  onClickActionInfo?:(value)=> void 
  onClickActionDelete?:(value)=> void 
  onClickActionCopy?:(value)=> void
  handleItemSelected?:()=> void
  itemsKeySelected?:Array<any>
}

export interface IProps {
  itemsList:Array<ItemsListItem>
  variant?:ListVariant
  onChangeItemsSelected?:(itemsSelected)=> void
}

export const ItemList = ({
  title,
  subTitle,
  labelText,
  img,
  icon,
  dropDrownAction,
  isAselectableItem,
  onClickActionInfo = undefined,
  onClickActionDelete  = undefined,
  onClick  = undefined,
  onClickActionCopy  = undefined,
  keyItem,
  variant,
  itemsKeySelected,
  handleItemSelected,
  }:ItemsListItem)=>{

   const [showActions,setShowActions] = useState(false)

   const Actions  = ()=>{
          
     if(showActions && isAselectableItem){

        return(
          <>
            <button onClick={()=>onClickActionInfo && onClickActionInfo(keyItem)}>
               <i className="fa-solid fa-info text-dark"></i>
            </button>
            <button onClick={()=> onClickActionDelete && onClickActionDelete(keyItem)}>
                 <i className="fa-regular fa-trash-can text-base text-dark"></i>
             </button>
             <button  onClick={()=> onClickActionCopy && onClickActionCopy(keyItem)}>
                <i className="fa-regular fa-copy text-base text-dark"></i>
             </button>
          </>
            )
         }
     return <></>
    }



  return (
    <div className={classname({
       'flex justify-between bg-white border  border-darkL2 p-4 items-start cursor-pointer':true,
        
       //variant list
       'mt-0 ':variant == 'group',
       'mt-4':variant == 'divider',

       ' bg-primaryL3':isAselectableItem && itemsKeySelected?.includes(keyItem),
       ' bg-lightL1':!isAselectableItem && itemsKeySelected?.includes(keyItem),
       })}

       onMouseOver={() =>  setShowActions(true)} 
       onMouseOut={() => setShowActions(false)}
       onClick={()=>{
         onClick && onClick(keyItem)
         handleItemSelected &&  handleItemSelected()
        }}
      >
       <div className='flex items-start gap-4'>
          {isAselectableItem && <input type="checkbox" checked={itemsKeySelected?.includes(keyItem) ? true:false} />}
          <div className='-translate-y-3'><Sticker img={img} icon={icon} /></div>
            <div>
               <h2 className='text-dark text-sm font-semibold'>{title}</h2>
               {labelText && <h3 className='font-normal text-sm text-secondary mb-1'>{subTitle}</h3>}
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




export const List: React.FC<IProps> = ({ 
  itemsList,
  variant = 'group',
  onChangeItemsSelected,
    ...props
 }) => {

  const [itemsKeySelected,setItemsKeySelected] = useState<any>([]) 

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
      <div className='w-[920px]'>
        {itemsList?.map((item)=>(
          <>
            <ItemList
              title={item?.title} 
              subTitle={item?.subTitle} 
              labelText={item?.labelText} 
              icon={item?.icon} 
              img={item?.img}
              isAselectableItem={item?.isAselectableItem}
              onClick={item?.onClick}
              onClickActionInfo={item?.onClickActionInfo}  
              onClickActionDelete={item?.onClickActionDelete}  
              onClickActionCopy={item?.onClickActionCopy}  
              keyItem={item?.keyItem}
              handleItemSelected={()=> handleItemSelected(item?.keyItem,item?.isAselectableItem)}
              itemsKeySelected={itemsKeySelected}
              variant={variant}
              dropDrownAction={item?.dropDrownAction}
            />
          </>
           ))}
      </div>
    )
}