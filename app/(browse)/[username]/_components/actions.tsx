"use client";

import { startTransition, useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";


interface ActionsProps{
    isFollowing: boolean;
};

export const Actions = ({ isFollowing }: ActionsProps) => {

    const [isPending, startTransition] = useTransition();

    const onClick = () => ({
        isFollowing,
    }: ActionsProps) => {
        startTransition(() => {
            onFollow("hellooo");
        })
}
    return(
        <Button disabled={isFollowing || isPending} onClick={onClick} className="bg-blue-500 text-white hover:bg-gray-500">
            Follow
        </Button>
    )
}