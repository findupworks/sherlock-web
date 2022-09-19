import React from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from 'classnames';

export interface IProps {
    progress: number,
    type?: string,
    isFinished?: boolean,
    
}
export const ProgressBar: React.FC<IProps> = ({ 
    progress,
    type,
    isFinished,
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

    if (type === 'kanban') {
        return (
            <div className='flex items-center'>
                <div className='w-40 md:w-80 lg:w-80 h-2 bg-white rounded-md mr-2'>
                    <div className="h-2 rounded-l-md bg-primaryD1 rounded-r-md" style={{"width": getProgress()}}
                    ></div>
                </div>
                <i className={
                    classNames({
                        'fa-regular fa-circle-check text-gray-700 self-center': true,
                        'text-successD1' : isFinished === true,
                        'text-warningD1' : isFinished === false
                    })}>
                </i>
                
            </div>
          
        )
    }

    const isSimple = ()=>{
        if(type === "simple"){
            return <div/>
        }else{
            if(progress >= 100){
                return <i className='fa-regular fa-circle-check text-successD1 self-center\'/>
            }else{
                return <p className='text-xs -translate-y-[0.01em] text-darkD2 font-bold'>{progress}%</p>
            }
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
                {isSimple()}

           
        </div>
      
    )
}