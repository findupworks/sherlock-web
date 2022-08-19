import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";

export interface IProps {
    progress: number,
}
export const ProgressBar: React.FC<IProps> = ({ 
    progress,
    ...props
 }) => {

    const getProgress = () =>{
        if(progress < 0){
            return "0%";
        }else if( progress >= 100){
            return "100%";
        } else{
            return progress +"%";
        }
        
    }
    return (
        <div className='flex items-center'>
            <div className='w-40 md:w-80 lg:w-80 h-2 bg-white rounded-md mr-2'>
                <div className={classname({
                    'h-2 rounded-l-md': true,
                    'bg-primaryD1': progress <= 30,
                    'bg-warningD1': progress > 30 && progress <= 70,
                    'bg-successD1': progress > 70,
                    'rounded-r-md': progress >= 100,

                })}
                style={{"width": getProgress()}}
                ></div>
            </div>

            {progress >= 100 ? (
                <i className='fa-regular fa-circle-check text-successD1 self-center\'></i>
            ): (
                <p className='text-xs -translate-y-[0.01em] text-darkD2 font-bold'>{progress}%</p>
            )}
        </div>
      
    )
}