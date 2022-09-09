import React,{useState,useEffect} from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {ProgressBar} from '../ProgressBar'
import {Label} from '../Label'
import {Badge } from '../Badge'
import { Button } from '../Button';
import { Switch } from '../Switch';
import {Sticker } from '../Sticker';
import {Dropdown,DropdownItem } from '../Dropdown';

import { StickerSizeVariant,TableTdVariant } from '../../types';


export interface TheadProps {
    th:String
    onClickOrderBy?:()=> void 
    itemsMenuAction?: DropdownItem[],
}

export interface TdProps {
    variant:TableTdVariant
    stickerSize?: StickerSizeVariant,
    stickerRounded?: boolean,
    stickerImg?: string,
    text?:String
    icon?:string
    progressbar?:number
    value?:any;
    checked?:boolean
    onChange?:(value)=> void
    onClick?:(event)=> void
    onClickInfo?:(value)=> void 
    onClickDelete?:(value)=> void 
    onClickCopy?:(value)=> void 
    itemsMenuAction?: DropdownItem[],
    indexTd?:number
    isRowSelected?:boolean
    trKey?:any;
  }
export interface TrProps {
  td:TdProps
}
export interface TbodyProps{
    tr:Array<TrProps>
    trKey:any
}
export interface IProps {
  thead:Array<TheadProps>
  tbody:Array<TbodyProps>
  onChangeItemsSelected:(itemsSelected)=> void
}


export const Td  = ({
      variant,
      stickerSize,
      stickerRounded,
      stickerImg,
      text,
      icon,
      value,
      checked,
      onChange,
      onClick,
      onClickInfo,
      onClickDelete,
      onClickCopy,
      indexTd,
      isRowSelected,
      progressbar,
      itemsMenuAction,
      trKey,
    }:TdProps)=>{
 
   switch(variant){
    case 'blank':
     return(
       <td className='py-4 px-6'>
         {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
       </td>
      )
    case 'checkbox':
      return(
       <td className='py-4 px-6'>
        <div className='flex items-center gap-2'>
           {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
           <input type="checkbox" onChange={onChange}   value={value} checked={checked}/>
        </div>
       </td>
      )
    case 'progressbar':
     return(
       <td className='py-4 px-6'>
        <div className='flex items-center gap-2'>
          {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
          <ProgressBar progress={Number(progressbar)} />
        </div>
       </td>
    )
    case 'text':
      return(
       <td className='py-4 px-6'>
        <div className='flex items-center gap-2'>
          {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
          {text}
         </div>
        </td>
    )
    case 'textSticker':
      return(
       <td className='py-4 px-6'>
        <div className='flex items-center gap-2'>
         {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
         <Sticker icon={icon} img={stickerImg} size={stickerSize} rounded={stickerRounded} />  
         {text}
         </div>
       </td>
      )
    case 'label':
      return(
        <td className='py-4 px-6'>
          <div className='flex items-center gap-2'>
           {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
           <Label label={String(text)}/>
           </div>
         </td>
      )
    case 'button':
      return(
        <td className='py-4 px-6'>
          <div className='flex items-center gap-2'>
           {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
            <Button label={String(text)} onClick={onClick} />
          </div>
         </td>
        )
    case 'sticker':
      return(
        <td className='py-4 px-6'>
          <div className='flex items-center gap-2'>
           {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
           <Sticker icon={icon} img={stickerImg} size={stickerSize} rounded={stickerRounded} />  
          </div>
         </td>
        )
    case 'input':
      return(
       <td className='py-4 px-6'>
         <div className='flex items-center gap-2'>
         {indexTd == 0 && <input type="text" checked={isRowSelected} /> }
         <input type="checkbox"  className='bg-blue'/>
        </div>
       </td>
      )
    case 'action':
     return(
      <td className='py-4 px-6'>
        <div className='flex items-center gap-4'>
          <button onClick={()=> onClickInfo && onClickInfo(trKey)}>
            <i className="fa-thin fa-info text-base"></i>
          </button>
          <button onClick={()=> onClickDelete &&  onClickDelete(trKey)}>
            <i className="fa-regular fa-trash-can text-base"></i>
          </button>
          <button onClick={()=> onClickCopy && onClickCopy(trKey)}>
            <i className="fa-regular fa-copy text-base"></i>
          </button>
          <Dropdown 
            itemsMenu={itemsMenuAction ? itemsMenuAction:[]} 
            leftIcon="fa-solid fa-ellipsis-vertical" 
            variant="default"
          />            
        </div>
      </td>
        )
    case 'badge':
      return(
        <td className='py-4 px-6'>
          <div className='flex items-center gap-2'>
           {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
           <Badge label={String(text)} />
          </div>
         </td>
      )
   case 'toggle':
    return(
        <td className='py-4 px-6'>
           <div className='flex items-center gap-2'>
            {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
            <Switch checked={checked ? checked:false} onChange={onChange}  onClick={()=> alert('')}/>
          </div>
         </td>
      )
   case 'icon':
      return(
        <td className='py-4 px-6'>
          <div className='flex items-center gap-2'>
            {indexTd == 0 && <input type="checkbox" checked={isRowSelected} /> }
            <i className={`fas fa-${icon}`}></i>
        </div>
        </td>
     )
  default :
    return <></>
   }
}

export const Table: React.FC<IProps> = ({ 
    thead,
    tbody,
    onChangeItemsSelected,
    ...props
 }) => {
 
   const [listKeySelected,setListKeySelected] = useState<any>([]) 
   const [showarrowordeBy,setShowarrowordeBy] = useState(false)
   
   const handleItemSelectedToggle  =   (key:any)=>{

    let listKeySelectedLocal = listKeySelected

    if(listKeySelected.includes(key)){
      listKeySelectedLocal = listKeySelectedLocal.filter((keyLocal)=> keyLocal != key );

      setListKeySelected(listKeySelectedLocal)
     
    }else{
      setListKeySelected([...listKeySelected,key])
    }
   }
   useEffect(()=>{
   onChangeItemsSelected && onChangeItemsSelected(listKeySelected)
   },[listKeySelected])


  

  
    return (
      <div className="overflow-x-auto relative" >
       <table className="w-full text-sm text-left">
         <thead className="text-sm text-primary">
          <tr className='bg-white'>
            {thead?.map((thead)=>(
             thead?.itemsMenuAction ? 
              <th>
                <Dropdown 
                 itemsMenu={thead?.itemsMenuAction ? thead?.itemsMenuAction:[]} 
                 leftIcon="fa-solid fa-ellipsis-vertical" 
                 variant="default"
                />       
             </th>:
             <th className='py-3.5 px-6 cursor-pointer' onClick={()=>{
              thead?.onClickOrderBy &&  thead?.onClickOrderBy()
              setShowarrowordeBy(!showarrowordeBy)
             
            }}>
              {thead?.th}
              {thead?.itemsMenuAction ? showarrowordeBy ?<i className="fa-solid fa-arrow-up ml-2"></i>:<i className="fa-solid fa-arrow-down ml-2"></i>:''}
              </th>
            ))}
          </tr>            
         </thead>
         <tbody className='text-dark'>
          {tbody?.map((tbody)=>(
            <tr
              className={classname({
                 'cursor-pointer border-b border-primaryD1':true,
                 'bg-primaryL3':listKeySelected.includes(tbody.trKey),
                 'bg-white ':!listKeySelected.includes(tbody.trKey)
                })} 
              onClick={()=> handleItemSelectedToggle(tbody.trKey)}
              >
          {tbody.tr.map((tr,indexTd)=>(
            <Td 
             variant={tr?.td?.variant}
             stickerSize={tr?.td?.stickerSize}
             stickerImg={tr?.td?.stickerImg} 
             text={tr?.td?.text}
             icon={tr?.td?.icon}
             progressbar={tr?.td?.progressbar}
             value={tr?.td?.value}
             onChange={tr?.td?.onChange}
             key={tbody?.trKey}
             onClick={tr?.td?.onClick}
             indexTd={indexTd}
             isRowSelected={listKeySelected.includes(tbody.trKey)}
             itemsMenuAction={tr?.td?.itemsMenuAction}
             onClickCopy={tr?.td?.onClickCopy}
             onClickDelete={tr?.td?.onClickDelete}
             onClickInfo={tr?.td?.onClickInfo}
             trKey={tbody?.trKey}
            />
           ))}
          </tr>
         ))}
        </tbody>
       </table>
     </div>
    )
}