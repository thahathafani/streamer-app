"use client";

import { User } from '@prisma/client';
import { useSidebar } from '@/store/use-sidebar';
import { UserItem, UserItemSkeleton } from './user-item';

interface RecommendedProps {
    data: User[];
}

const Recommended = ({
    data,
}: RecommendedProps) => {
    const { collapsed } = useSidebar((state) => state);
;

    const showLable = !collapsed && data.length > 0; //-- its should be added only after the prisma and the ngrok setup is completed!
  return ( 
    <div>{showLable && (
        <div className="pl-6 mb-4">
            <p className=" text-sm text-muted-foreground">
                Recommended
            </p>
        </div>
    )}
    <ul className="space-y-2 px-2">
        {data.map((user) => (
            <UserItem
                key={user.id}
                username={user.username}
                imageUrl={user.imageUrl}
                isLive={true}
            />
        ))}
    </ul>
    </div>
  )
}

export const RecommendedSkeleton = () => {
    return (
        
        <ul className="px-2">
            {[...Array(3).map((_, i) => (
                <UserItemSkeleton key={i}/>
            ))]}
            
        </ul>
    //     <li className="flex items-center gap-x-4 px-3 py-2">
    //     <Skeleton className='min-h-[32px] min-w-[32px] rounded-full'/>
    //     <div className="flex-1">
    //         <Skeleton className='h-6'/>
    //     </div>
    // </li>
    );
};

export default Recommended