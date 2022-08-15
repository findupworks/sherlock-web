import React, { useState, Fragment } from 'react';
import classname from 'classnames';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Dropdown } from '../Dropdown';

export enum CardVariant {
    default = 'default',
    iconCard = 'iconCard',
    userCard = 'userCard',
    horizontalCard = 'horizontalCard'
}

export enum CardSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export interface DropdownItem {
    label?: string;
    isDivider?: boolean;
    icon?: string;
    subLabel?: string;
    image?: string;
}

export interface TagItem {
    text?: string;
}

export interface IProps {
    imageCard: string;
    onClick?: () => void;
    title: string,
    body: string,
    variant?: CardVariant,
    size?: CardSize,
    checked?: boolean,
    iconCard?: string,
    userCard: string,
    iconButton?: string,
    items: DropdownItem[],
    tags: TagItem[],
    onTapCheck?: (check: boolean) => void;
    onTapMenu?: () => void;
    onTapCard?: () => void;
    onTapIcon?: () => void;
}

export const Card: React.FC<IProps> = ({
    imageCard,
    title,
    body,
    checked = false,
    iconCard,
    userCard,
    iconButton,
    size = CardSize.md,
    variant = CardVariant.default,
    items,
    tags,
    onTapCheck,
    onTapCard,
    onTapMenu,
    onTapIcon,
    ...props
 }) => {

    const [check, setCheck] = useState(checked);

    const onClickCheck = () => {
       setCheck(!check);
       if(onTapCheck) onTapCheck(!check);
    }

    const getIconButton = () => {
        if(iconButton) {
            return <i className={`fas fa-${iconButton}`}></i>
        } else {
            return <i className="fa-solid fa-image"></i>
        }
    }

    const getIconCard = () => {
        if(iconCard) {
            return <i className={`fas fa-${iconCard} fa-4x`}></i>
        } else {
            return <i className="fa-solid fa-bolt fa-4x"></i>
        }
    }

    const getUserCard = () => {
        if(userCard) {
            return <i className={`fas fa-${userCard} fa-4x`}></i>
        } else {
            return <i className="fa-solid fa-user fa-4x"></i>
        }
    }

    function getVariant() {

        if (CardVariant.default === variant) {
            return <img className="w-full" src={imageCard ? imageCard : 'https://v1.tailwindcss.com/img/card-top.jpg'} />
        }

        if (CardVariant.userCard === variant) {
            return (
                <div className={classname({
                    'flex justify-center items-center' : true,

                    'h-[140px]' : CardSize.sm == size,
                    'h-[178px]' : CardSize.md == size,
                    'h-[217px]' : CardSize.lg == size,

                })}> 
                    {
                        getUserCard()
                    }
                </div>
            );
        }

        if (CardVariant.iconCard === variant) {
            return (
                <div className={classname({
                    'flex justify-center items-center' : true,

                    'h-[140px]' : CardSize.sm == size,
                    'h-[178px]' : CardSize.md == size,
                    'h-[217px]' : CardSize.lg == size,

                })}> 
                    {
                        getIconCard()
                    }
                </div>
            );
        }
    }

    const getTag = (tags: TagItem) => {
        return (
            <span className={
                classname({
                    'inline-block border border-green-400 px-3 py-1 text-xs font-semibold text-success mr-2 mb-2 border-success' : true
                })}>
                    {tags.text}
            </span>
        )
    }

    function getContent() {
        return <div className={
            classname({
                'rounded shadow-lg bg-white hover:border-sky-600 hover:border box-content' : true,

                'max-w-[230px] min-w-[166px]' : CardSize.sm == size,
                'max-w-[294px] min-w-[230px]' : CardSize.md == size,
                'max-w-[358px] min-w-[294px]' : CardSize.lg == size,

                'border-sky-600 border' : check

            })}>
            
            <div className="relative">
                
                <input className="absolute top-3 left-3 h-4 w-4 border border-teal rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                    type="checkbox" 
                    id="flexCheckDefault" 
                    checked={check} 
                    onClick={onClickCheck}
                    />

                {
                    variant === CardVariant.userCard ? ''
                    : <button className="absolute bottom-5 left-3 h-8 w-8 border rounded bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        onClick={onTapIcon}
                    >
                        { getIconButton() }
                    </button>
                    
                }

                { getVariant() }
                
            </div>
            
            <div className="flex justify-between px-4 py-2 border-t-2 border-secondaryL3 bg-white">
                <div onClick={onTapCard}>
                    <p className="text-dark break-all">
                        { title ? title : 'Card Title' }
                    </p>
                    <p className="text-secondary text-base break-all"> 
                        { body ? body : 'Body Text' }
                    </p>
                </div>
                
                <div className="h-10 w-5 pl-3">
                    <Dropdown items={items} leftIcon="fa-solid fa-ellipsis-vertical" />
                </div>    
                
            </div>

            <div className={
                classname({
                    'px-4 pb-2' : true 
                })}>

                {
                    tags.map(tag => (
                    <>
                        { getTag(tag) }
                    </>
                ))
              }
            </div>
        </div>
    }

    function getHorizontalCard() {
        return <div className={
            classname({
                'rounded grid grid-cols-2 shadow-lg bg-white hover:border-sky-600 hover:border box-content' : true,

                'max-w-[250px] min-w-[196px]' : CardSize.sm == size,
                'max-w-[294px] min-w-[230px]' : CardSize.md == size,
                'max-w-[358px] min-w-[294px]' : CardSize.lg == size,

                'border-sky-600 border' : check

            })}>

            <div className="flex items-start pl-2 pt-2 col-span-2 gap-3">
                
                <div className="flex items-center gap-2">
                    <input className="top-3 left-3 h-4 w-4 border border-teal rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                        type="checkbox" 
                        id="flexCheckDefault" 
                        checked={check} 
                        onClick={onClickCheck}
                    />
                    <button className="bottom-5 left-3 h-8 w-8 border rounded bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        onClick={onTapIcon}
                    >
                        { getIconButton() }
                    </button>
                </div>

                <div onClick={onTapCard} className="">
                    <p className="text-dark break-all">
                        { title ? title : 'Card Title' }
                    </p>
                    <p className="text-secondary text-base break-all"> 
                        { body ? body : 'Body Text' }
                    </p>
                    <div className="mb-2">
                        

                        {
                            tags.map(tag => (
                            <>
                                { getTag(tag) }
                            </>
                        ))
                    }
                    </div>
                </div>
            </div>

            <div className="h-10 col-end-10">
                <Dropdown items={items} leftIcon="fa-solid fa-ellipsis-vertical" />
            </div>
            
        </div>
    }


    return (
        CardVariant.horizontalCard === variant ? getHorizontalCard() : getContent()
    )
}