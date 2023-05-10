"use client"
import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineExclamationCircle, AiFillQuestionCircle, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FcNeutralTrading } from 'react-icons/fc'
import { BiLinkExternal } from 'react-icons/bi'
import { TiContacts } from 'react-icons/ti'
import { IoIosArrowUp } from 'react-icons/io'


const SideBar = (props) => {
    const [productList, setProductList] = useState(0)

    const handleProductList = () => {
        if(productList === 100){
            setProductList(0)
        }else{
            setProductList(100)
        }
    }
    return (
        <div className={`fixed t-0 l-0 bg-black text-white h-100 w-[300px] z-10 px-2 py-3 -translate-x-${props.sideBar} transition-all ease-linear duration-300`}>
            <ul className=''>
                <li className='m-auto w-full flex justify-end items-center font-semibold cursor-pointer'>
                    <AiOutlineClose className='text-xl' onClick={props.handleSideBar} />
                </li>
            </ul>
            <ul className='w-full'>
                <li className='text-[27px] font-semibold w-full text-center'>
                    Calyco
                </li>
            </ul>

            <div className='w-100 text-gray-400 flex flex-col justify-start items-start'>
                <ul className='p-0 flex gap-3 items-center'>
                    <li><AiOutlineHome className='text-lg' /></li>
                    <li className=' '>Home</li>
                </ul>
                <ul className='p-0 flex gap-3 items-center'>
                    <li><AiOutlineExclamationCircle className='text-lg' /></li>
                    <li>About us</li>
                </ul>
                <div className='w-full'>
                    <div className='flex items-center justify-between w-full cursor-pointer' onClick={handleProductList}>
                        <ul className='p-0 flex gap-3 items-center'>
                            <li>
                                <MdOutlineProductionQuantityLimits />
                            </li>
                            <li>
                                Product
                            </li>
                        </ul>
                        <ul className="p-0">
                            <li>
                                <IoIosArrowUp/>
                            </li>
                        </ul>
                    </div>
                    <div className={`h-${productList} overflow-hidden transition-all ease-liner duration-300`}>
                        <ul className={`list-disc flex flex-col gap-1 text-sm`}>
                            <li className=''>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <ul className='p-0 flex gap-3 items-center'>
                            <li>
                                <FcNeutralTrading />
                            </li>
                            <li>
                                Trading
                            </li>
                        </ul>
                        <ul className="p-0">
                            <li>
                                <IoIosArrowUp />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc flex flex-col gap-1 text-sm">
                            <li className=''>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                            <li>
                                Calcined petroleum coke
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className='p-0 flex items-center gap-3'>
                    <li><BiLinkExternal /></li>
                    <li>Join our team</li>
                </ul>
                <ul className='p-0 flex items-center gap-3'>
                    <li><TiContacts /></li>
                    <li>Contact us</li>
                </ul>
                <ul className='p-0 flex items-center gap-3'>
                    <li><AiFillQuestionCircle /></li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar