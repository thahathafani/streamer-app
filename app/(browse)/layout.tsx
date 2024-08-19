import React from 'react'
import Navbar from './_component/navbar';
import { Logo } from './_component/navbar/logo';
import { Sidebar } from './_component/sidebar';

const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
  return (
    <>
        <Navbar />
        <div className='flex h-full pt-20'>
            <Sidebar/>
            {children}
        </div>
    </>
  )
}

export default BrowseLayout