import React,{useState,useEffect} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import classname from 'classnames'
export enum DatePickerType {
    datetime = 'datetime',
    date = 'date',
    time = 'time'
}

export interface IProps {
    label: string,
    type: DatePickerType,
    onChange:(date:Date)=> void
    value:Date
}

export interface CalendarComponentProps {
  noCalendar:boolean
  enableTime:boolean
  dateFormat:string
  placeholder:string
}

export const DatePicker: React.FC<IProps> = ({ 
    label,
    type = DatePickerType.datetime,
    onChange,
    value
 }) => {

   const [options,setOptions] = useState({
       dateFormat:'"d-m-Y H:i',
       noCalendar:false,
       enableTime: true,
       placeholder:'YYYY-MM-DD   --:--'
      })


 const changeCalendar = ()=>{

    if(type == DatePickerType.datetime){
        setOptions({...options,dateFormat:"d-m-Y H:i",noCalendar:false,enableTime:true,placeholder:'YYYY-MM-DD   --:--'})
    }
    if(type == DatePickerType.date){
      setOptions({...options,dateFormat:"d-m-Y H:i",noCalendar:false,enableTime:false,placeholder:'YYYY-MM-DD'})
    }
    if(type == DatePickerType.time){
        setOptions({...options,dateFormat: "H:i",noCalendar:true,enableTime:true,placeholder:'--:--'})
    }

 }

 useEffect(()=>{
    changeCalendar()
 },[type])

 const CalendarComponent = React.memo(({noCalendar,enableTime,dateFormat,placeholder}:CalendarComponentProps) => {
    
    const options = {
       dateFormat:dateFormat,
       noCalendar:noCalendar,
       enableTime: enableTime,
       locale:{
         weekdays: {
         shorthand: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S','D'],
         longhand: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado','Domingo'],         
        }, 
         months: {
          shorthand: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
          longhand: ["Janeiro","Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro", "Dezembro"],
            },
          },
        }


  return (
    <>
     <Flatpickr
       onChange={([date]) => onChange(date)}
       data-enable-time
       value={value}
       className={classname({
        'py-2	px-4 border-[1px] border-dark rounded ':true,
         'w-44':type == DatePickerType.datetime || type == DatePickerType.date,
         'text-center w-20':type == DatePickerType.time,

       })}
       options={options}
       placeholder={placeholder}
      />    
    </>
  )
});
return (
    <>
     <div className='text-dark text-sm font-semibold mb-1'>{label}</div> 
      <CalendarComponent 
         noCalendar={options?.noCalendar} 
         enableTime={options?.enableTime} 
         dateFormat={options?.dateFormat} 
         placeholder={options?.placeholder} 
      />
    </>
    )
}