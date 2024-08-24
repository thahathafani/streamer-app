import React, { Suspense } from 'react'
import Navbar from './_component/navbar';
import { Logo } from './_component/navbar/logo';
import { Container } from './_component/container';
import { Sidebar, SidebarSkeleton } from './_component/sidebar';



const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
  return (
    <>
        <Navbar />
        <div className='flex h-full pt-20'>
            <Suspense fallback={<SidebarSkeleton/>}>
                <Sidebar/>
            </Suspense>
            <Container>
                {children}
            </Container>
        </div>
    </>
  )
}

export default BrowseLayout