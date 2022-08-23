import React,{MouseEventHandler} from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Select from 'react-select';
import { Button } from '../Button';
import { ColorVariant } from '../../types';

export type OptionsProps ={
   value:any 
   label:any
}

export interface IProps {
    options:Array<OptionsProps>
    onChange:(option:any)=> void 
    onClickButton?:(event:any)=> void
    labelButton?:string
    isDisabled?:boolean
    isLoading?:boolean
}

export const MultiSelect: React.FC<IProps> = ({
    onChange,
    onClickButton = undefined,
    options,
    labelButton = 'SELECT',
    isDisabled = false, 
    isLoading = false,
    ...props
 }) => {

  const colourStyles = {
    container: (provided:any) => ({
      ...provided,
      width: '80%',
      minWidth:'10rem',
      color:'#7E7E82',
      zIndex:'1000',

    }),
    multiValue: (styles:any, { data }:any) => {
      return {
        ...styles,
        backgroundColor:'#0086D6',
      };
    },
    multiValueLabel: (styles:any) => ({
      ...styles,
      backgroundColor:'#0086D6',
      color:'#F2F0F3',
    }),
    multiValueRemove: (styles:any, { data }:any) => ({
      ...styles,
      backgroundColor:'#0086D6',
      color:'#F2F0F3',
      ':hover':{
      backgroundColor:'#084B76',
      color:'#F2F0F3',
      }
    }),
  };
    return (
        <div className='w-full flex gap-2 items-start z-50'>
          <Select 
            styles={colourStyles}
            isMulti
            options={options}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onChange={onChange}
          />
        {onClickButton &&  <Button label={labelButton} variant={ColorVariant.primary} outlined  onClick={onClickButton} />}
       </div>     
    )
    
}