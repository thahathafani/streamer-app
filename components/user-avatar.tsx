import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface UserAvatarProps {
    imageUrl: string;
    username: string;
    isLive?: boolean;
}

const UserAvatar = ({
    imageUrl,
    username,
    isLive,
}: UserAvatarProps) => {
    return (
        <div className="relative">
            <Avatar>
                <AvatarImage src={imageUrl} alt={username} />
                <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            {isLive && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            )}
        </div>
    );
};

export default UserAvatar;

// import React from 'react'

// const UserAvatar = () => {
//   return (
//     <div>UserAvatar</div>
//   )
// }

// export default UserAvatar