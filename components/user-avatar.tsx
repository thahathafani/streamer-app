import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { LiveBadge } from "@/components/live-badge";
import { Skeleton } from "./ui/skeleton";

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14",
            },
        },
        defaultVariants: {
            size: "default",
        },
    },
);

interface UserAvatarProps 
extends VariantProps<typeof avatarSizes> {
    imageUrl: string;
    username: string;
    isLive?: boolean;
    showBadge?: boolean;
}

const UserAvatar = ({
    imageUrl,
    username,
    isLive,
    showBadge,
    size,
}: UserAvatarProps) => {

    const canShowBadge = showBadge && isLive;
    return (
        <div className="relative">
            <Avatar
                className={cn(
                 isLive && "ring-2 ring-green-500 border-background",
                 avatarSizes({ size }),

                )}    
            >
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {username[0]}
                    {username[username.length-1]}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform
                 -translate-x-1/2">
                    <LiveBadge/>
                </div>
            )}
        </div>
    );
};

interface UserAvatarSkeletonProps
    extends VariantProps<typeof avatarSizes> {};

    export const UserAvatarSkeleton = ({
        size,
    }: UserAvatarSkeletonProps) => {
        <Skeleton className={cn(
            "rounded-full",
            avatarSizes ({ size }),
            )}/>
    }

export default UserAvatar;

// import React from 'react'

// const UserAvatar = () => {
//   return (
//     <div>UserAvatar</div>
//   )
// }

// export default UserAvatar