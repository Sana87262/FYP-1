import Image from 'next/image'
import React from 'react'

const Empty = () => {
  return (
    <div className='border-conversation-border border-l  w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center'>
      <Image src="/Images/SmartConnect.png " alt="smartconnect"  height={300} width={300}
        
      /></div>
  )
}

export default Empty