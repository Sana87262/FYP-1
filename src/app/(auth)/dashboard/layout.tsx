
import MainLayout from '@/components/dashboard/MainLayout'
import React, { Children } from 'react'




const layout = ({children}: {
    children: React.ReactNode
  }) => {
  return (
    <body>
      
      <MainLayout>{children}</MainLayout>
      
      </body>
  )
}

export default layout