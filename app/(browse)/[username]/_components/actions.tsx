"use client";

import { useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


interface ActionsProps{
    isFollowing: boolean;
    userId: string;
};

export const Actions = ({ 
        isFollowing,
        userId, 
    }: ActionsProps) => {

    const [isPending, startTransition] = useTransition();

    const onClick = () => {
        startTransition(() => {
            onFollow(userId)
            .then((data) => toast.success("Following"))
            .catch(() => toast.error("somthing wrong"));
        })
}
    return(
        <Button disabled={isFollowing || isPending} onClick={onClick} className="bg-blue-500 text-white hover:bg-gray-500">
            Follow
        </Button>
    )
}