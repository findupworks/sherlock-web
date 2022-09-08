import React, {useState} from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { ColorVariant, SizeVariant, EmptyStateVariant } from '../../types';

export interface IProps {
  image?: string;
  title?: string,
  bodyMessage?: string,
  buttonLabel?: string,
  size?: SizeVariant,
  buttonVariant?: ColorVariant,
  variant?: EmptyStateVariant,
  onClickButton?: () => void;  
}

export const EmptyState: React.FC<IProps> = ({
    image,
    title = "Place your title here",
    bodyMessage = "Please, fill this text box with your content",
    buttonLabel,
    buttonVariant = 'primary',
    size = 'sm',
    variant = 'default',
    onClickButton,
    ...props
}) => {

    function getDefault(){
        return <div className={
            classNames({
                'rounded shadow-lg bg-white' : true,

                'max-w-[250px] min-w-[200px]' : 'sm' == size,
                'max-w-[450px] min-w-[400px]' : 'md' == size,
                'max-w-[700px] min-w-[650px]' : 'lg' == size,

            })}>
                <div className="text-center items-center flex flex-col justify-between mx-5">
                    
                    <div className="mt-5">
                        <img className={
                            classNames({
                                'w-28 h-28' : 'sm' == size,
                                'w-40 h-40' : 'md' == size,
                                'w-64 h-64' : 'lg' == size,
                            })
                        } src={image ? image : 'https://i.ibb.co/86F18Qg/Dataset.png'} />
                    </div>

                    <div className="space-y-2 mt-4">
                        <h2 className="text-2xl font-medium">
                            { title }
                        </h2>

                        <p className="mt-4 text-gray-500">
                            { bodyMessage }
                        </p>
                    </div>

                    <div className="my-4" onClick={onClickButton}>
                        <Button label={buttonLabel ? buttonLabel : 'New collection' } outlined variant={ buttonVariant }/>
                    </div>

                    
                </div>
        </div>
    }

    function getNoImage(){
        return <div className={
            classNames({
                'rounded shadow-lg bg-white justify-content items-center flex flex-col' : true,

                'max-w-[350px] min-w-[300px]' : 'sm' == size,
                'max-w-[450px] min-w-[400px]' : 'md' == size,
                'max-w-[700px] min-w-[650px]' : 'lg' == size,

            })}>
                <div className="flex flex-col justify-between mx-5 w-60">

                    <div className="space-y-2 mt-4">
                        <h2 className="text-1xl font-medium">
                            { title }
                        </h2>

                        <p className="mt-4 text-gray-500">
                            { bodyMessage }
                        </p>
                    </div>

                    <div className="my-4">
                        <Button leftIcon="plus" label={buttonLabel ? buttonLabel : 'New collection' } variant={ buttonVariant } />
                    </div>

                    
                </div>
        </div>
    }

    return (
        'default' === variant ? getDefault() : getNoImage()
    );
};