import React, { useState,useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from 'classnames';
import { Dropdown } from '../Dropdown';

export interface StepsBreadcrumb {
    label:string 
    router:string
} 
export interface StepsBreadcrumbItem {
    label:string 
    router:string
    onClick?:()=> void
    key?:number

} 

export interface IProps {
  stepsBreadcrumb:Array<StepsBreadcrumb>
 
}
export interface StepLinkProps {
    router:string
    label:string
    index:number
} 
export const Breadcrumb: React.FC<IProps> = ({ 
    stepsBreadcrumb,
    ...props
 }) => {

    const handleRouter = (link:string,index)=>{
        setIndexCurrent(index)
        window.location.href = link 
    }
   
   
   
    const [indexStepCurrent,setIndexCurrent] = useState(-10)
    const [stepPrevious,setStepPrevious] = useState<Array<StepsBreadcrumbItem>>([])


    useEffect(()=>{
      let stepPreviousTemp:Array<any> = []
      
      stepsBreadcrumb?.map((step,index)=>{
          if(index < indexStepCurrent){
            stepPreviousTemp.push({label:step.label,router:step.router,onClick:()=> handleRouter(step?.router,index)})
            }
        })

         setStepPrevious(stepPreviousTemp)
    },[indexStepCurrent])
    const StepLink = ({index,router,label}:StepLinkProps)=>{

      const content = ()=>{
        return(
          <li >
            <div className="flex items-center" onClick={()=> setIndexCurrent(index)}>
              {index != 0&& <svg className="w-6 h-6 text-darkL1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>}
              <a 
                href={router} 
                className={classname({
                  'ml-1 text-s text-darkL1 hover:underline':true,
                  'font-normal text-darkL1':index != indexStepCurrent,
                  'font-semibold text-dark':index == indexStepCurrent
                })}>{label}</a>
             </div>
            </li>
          )
      }


     if(stepsBreadcrumb?.length >= 5){
        if(index >= indexStepCurrent){
            return (
              content()
            )
         } 
      }else {
        return(
          content()
          )
      }
            
        return <></>   
    }
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {stepsBreadcrumb?.length >= 5 &&  indexStepCurrent > 0 &&  <Dropdown itemsMenu={stepPrevious} leftIcon="fa-solid fa-ellipsis" variant="default" />}
          {stepsBreadcrumb?.map((step,index)=> <div key={index}> <StepLink index={index} label={step?.label} router={step?.router}/></div>) }
        </ol>
     </nav>
    )
}