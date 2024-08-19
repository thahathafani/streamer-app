import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
 } from "@/components/ui/tooltip";

interface HintProps {
    lable: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "top" | "bottom" | "left" | "right"
    align?: "start" | "center" | "end";

}

export const Hint = ({
    lable,
    children,
    asChild,
    side,
    align,
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-black bg-white"
                                align={align}
                                side={side}
                >
                    <p className="font-semibold">
                        {lable}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}