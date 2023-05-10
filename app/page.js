"use client"
import Image from 'next/image'
import LandingPage from './pages/LandingPage'
import SideBar from './components/SideBar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

export default function Home() {
  const [sideBar, setSideBar] = useState(0);

    const handleSideBar = () => {
        if(sideBar === "full"){
            console.log(sideBar)
            setSideBar(0)
        }else{
            console.log(sideBar)
            setSideBar("full");
        }
    }
  return (
    <>
      <div>
        <div className='fixed top-[74px] left-12 text-2xl cursor-pointer' onClick={handleSideBar}><GiHamburgerMenu /></div>
        <SideBar handleSideBar={handleSideBar} sideBar={sideBar}/>
        <LandingPage />
      </div>
    </>
  )
}
