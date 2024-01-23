"use client"


import Image from 'next/image'


import { FaBars } from "react-icons/fa";



const MainHeader = ({isOpen, setIsOpen} : {isOpen: Boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

  return (
    <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'>
        <div> <Image src="/logo.png" alt="SmartConnect logo" 
          width={150}
          height={18}
           className="object-contain" />
           </div>
           <div onClick={()=>setIsOpen(true)} className='lg:hidden'> 
           <FaBars className="cursor-pointer"/>
           {/* <FaBars/> */}
           </div>
          
    </div>
  )
}

export default MainHeader