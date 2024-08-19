import React from 'react'
import Navbar from './_component/navbar';
import { Logo } from './_component/navbar/logo';

const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
  return (
    <>
        <Navbar />
        <div className='flex h-full pt-20'>
            {children}
        </div>
    </>
  )
}

export default BrowseLayout