"use client"
import React, { useContext, useState } from 'react'
import MainHeader from './MainHeader'
import MainSidebar from './MainSideBar'

const MainLayout = ({children}:{
    children: React.ReactNode
  }) => {
    

    const [isOpen, setIsOpen] = useState(false);

   
  return (
    <div className='bg-blue-1000 min-h-screen'>
      <MainSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
          
         <div className={`${isOpen ? 'max-lg:blur-xl pointer-events-none' : ''}`}>
         <MainHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
         <main className='lg:ml-[280px]'>{children}
        </main>
        </div>
        
        
        </div>
  )
}

export default MainLayout