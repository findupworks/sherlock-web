// import React,{ReactNode, ButtonHTMLAttributes} from 'react';
// import classname from 'classnames';
// import { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide,useSwiper, } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { TypeOptionsVariant } from '../../types';

// export interface StepsProps{
//     stepName: string
// }

// export interface StepsItemProps {
//   stepName: string;
//   step: number;
// }

// export interface IProps{
//  stepCurrent: number,
//  type: TypeOptionsVariant,
//  steps: Array<StepsProps>,
//  children?: ReactNode
// }

// export type ButtonsActionsProps =   ButtonHTMLAttributes<HTMLButtonElement> &  {
//   children:ReactNode
//   onClick:()=> void
// }

// export  function SlideNextButton({children,onClick,...props}:ButtonsActionsProps) {

//   const swiper = useSwiper();

//   return (
//    <button {...props}  onClick={()=>{onClick && onClick(),swiper.slideNext()}}>
//     {children}
//   </button>
//   )
// }
// //bg-blue

// export  function SlidePreviosButton({children,onClick,...props}:ButtonsActionsProps) {
//   const swiper = useSwiper();

//   return (
//     <button {...props} onClick={()=>{onClick && onClick(),swiper.slidePrev()}}>
//       {children}
//   </button>

//   )
// }

// export const MultiStep: React.FC<IProps> = ({
//   steps,
//   stepCurrent,
//   type,
//   children,
//     ...props
//  }) => {

//  const StepItem = ({stepName,step}:StepsItemProps)=>{

//    const contentText = () =>{
//     if(stepCurrent > step) return <i className="fa-solid fa-check"></i>

//     return step
//    }
//   if(type == 'stepCircleCondensed'){

//     return (
//       <div className='min-w-[25%]' >
//         <div className={classname({
//           'font-semibold text-sm text-secondary h-14 break-words pr-2':true,
//           })}>
//             {stepName}
//             </div>
//         <div className={classname({
//           "flex items-center":true,
//           "after:w-full after:h-1":type == 'stepCircleCondensed' ,
//           "after:w-0 after:h-0 scale-x-100":type == 'stepCircleCondensed' && step == steps?.length && steps?.length > 1,

//           //colors
//           'before:bg-secondary after:bg-secondary':stepCurrent > step || stepCurrent == steps?.length,
//           'before:bg-secondaryL3 after:bg-secondaryL3':stepCurrent < step,
//           'before:bg-secondary after:bg-secondaryL3':stepCurrent == 1 || stepCurrent == step && step != steps.length,

//           })}>
//           <div className={classname({
//             'min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center z-50 abo ':true,
//             'bg-primary text-white':stepCurrent == step,
//             'bg-secondary text-white':stepCurrent > step,
//             'bg-secondaryL3 text-secondary':stepCurrent < step,
//             'before:bg-secondary after:bg-secondaryL3':stepCurrent == 1
//             })}>
//             {contentText()}
//           </div>
//         </div>
//     </div>
//      )
//   }
//    return (
//     <div className='w-1/4'>
//       <div className={classname({
//         'font-semibold text-sm text-secondary h-14 break-words pr-2':true,
//         'text-center':step == 1 && type == 'stepCircle',

//         })}>{stepName}</div>
//       <div className={classname({
//         "flex items-center":true,

//         "after:w-full after:h-1":type == 'stepCircle',
//         "before:w-full before:h-1 before:bg-secondary":type == 'stepCircle' && step == 1,

//          //colors
//          'before:bg-secondary after:bg-secondary':stepCurrent > step || stepCurrent == steps?.length,
//          'before:bg-secondaryL3 after:bg-secondaryL3':stepCurrent < step,
//          'before:bg-secondary after:bg-secondaryL3':stepCurrent == 1 || stepCurrent == step && step != steps.length,

//          })}>
//         <div className={classname({
//           'min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center z-50 abo ':true,
//           'bg-primary text-white':stepCurrent == step,
//           'bg-secondary text-white':stepCurrent > step,
//           'bg-secondaryL3 text-secondary':stepCurrent < step,
//           'before:bg-secondary after:bg-secondaryL3':stepCurrent == 1
//           })}>
//           {contentText()}
//         </div>
//       </div>
//     </div>
//    )
//  }

//  const content = ()=>{
//   if(type == 'stepBar'){
//     return (
//       <div className='bg-white w-full border-secondaryL3 border-[1px] text-secondary text-sm flex justify-between py-1.5 px-6'>
//         <div className="mr-4">
//          {steps[--stepCurrent]?.stepName}
//         </div>
//         {++stepCurrent} de  {steps?.length}
//       </div>
//     )
//   }

//   if(type == 'stepCircleCondensed'){
//     return (
//       <div className='w-full h-full'>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={1}
//           initialSlide={stepCurrent}
//           slidesPerView={5}
//           allowTouchMove={false}
//           centeredSlides
//           onSwiper={(swiper)=> {swiper.slideTo(--stepCurrent)}}
//           navigation={ {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev"
//           }}
//         >
//         {steps?.map((step,index)=> (
//           <SwiperSlide>
//                <StepItem stepName={step?.stepName} step={++index}/>
//           </SwiperSlide>
//           ))}
//           {children}
//        </Swiper>
//       </div>
//     )
//   }

//   return(
//     <div className='flex items-center z-index w-full'>
//      {steps?.map((step,index)=> <StepItem stepName={step?.stepName} step={++index} />)}
//     </div>
//   )
//  }

//   return (
//     content()
//   )
// }
