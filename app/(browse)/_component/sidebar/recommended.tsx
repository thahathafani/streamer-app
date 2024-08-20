"use client";

import { User } from '@prisma/client';
import { useSidebar } from '@/store/use-sidebar';
import { UserItem } from './user-item';

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

export default Recommended