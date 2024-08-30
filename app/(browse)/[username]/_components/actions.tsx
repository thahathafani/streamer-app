"use client";

import { startTransition, useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

export const Actions = () => {

    const [isPending, stratTransition] = useTransition();

    const onClick = () => {
        startTransition(() => {
            onFollow("hellooo");
        })
}
    return(
        <Button disabled={isPending} onClick={onClick} className="bg-blue-500 text-white hover:bg-blue-500">
            Follow
        </Button>
    )
}