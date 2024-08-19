import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200","300","400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return(
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-1">
                <Image 
                src=""
                alt="streamer-app"
                height="80"
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-2xl font-semibold">
                    Streamer
                </p>
                <p className="text-lg text-muted-foreground">
                    let's Stream Now
                </p>
            </div>
        </div>
    );
};