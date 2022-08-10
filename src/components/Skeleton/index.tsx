import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant } from '../../types';
import classNames from 'classnames';

export interface IProps {
    rows?: number;
    width?: number;
    height?: number;
    rounded?: boolean;
}

export const Skeleton: React.FC<IProps> = ({
    rows = 1,
    width = 100,
    height = 100,
    rounded =  true,
    ...props
 }) => {
    return (
        <div className="animate-pulse ">
            {
                Array(rows).fill("").map( n => (
                    <div 
                        style={{
                            width: `${width}px` ,
                            height: `${height}px`
                        }}
                        className={
                            classNames({
                                'bg-gray-200 rounded m-2' : true,
                                'rounded' : !rounded,
                                'rounded-full' : rounded,
                            })
                        }
                    ></div>
                ))
            }
        </div>
    )
}