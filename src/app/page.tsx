"use client";

import CustomButton from '@/components/CustomButton';
import Navbar from '@/components/Navbar';
import Image from 'next/image';



import { useRouter } from 'next/navigation';


export default function Home() {
  const router=useRouter();
  
  const handleScroll=()=>{
   router.push('/signin')
   }
  return (
   
    <>
    <Navbar />
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto ">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="text-3xl lg:text-4xl xl:text-3xl font-bold text-black-600 leading-normal sm:text-[64px] text-blue-950 pl-5">
          Welcome to SmartConnect
        </h1>
        <h1 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-black-600 leading-normal mt-4 ">
          A decentralized world awaits
        </h1>
        <p className='text-black-500 mt-4 mb-6 pl-10 font-bold'>Take matters into your own hands</p>
        
          <CustomButton
            title="Get Started"
            containerStyles="bg-blue-950 text-white rounded-full m-10  "
            handleClick={handleScroll} />
      </div>
      <div className="xl:flex-[1] flex justify-end items-end w-full xl:h-screen">

        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/landingpage.jpg" alt="landingpage" fill className="object-contain p-12 rounded-full" />
        </div>

      </div>

    </div></>
     
  )
}
