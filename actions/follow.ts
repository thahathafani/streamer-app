// "use server";

// export const onFollow = (id: string) => {
//     try{
//         console.log("I am an Api call", id);
//     } catch (error){

//         throw new Error("Internal Error");
//     }
// }


// follow.ts
"use server";

import { revalidatePath } from "next/cache";
import { followUser } from "@/lib/follow-service";

export const onFollow = async (id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            const followedUser = await followUser(id);

            revalidatePath("/");

            if (followUser) {
                revalidatePath(`/${followUser.following.username}`);
            }

            // Simulate an API call with a delay
            setTimeout(() => {
                resolve(); // Resolve the promise if the operation succeeds
            });
            return followUser;
        } catch (error) {
            reject(new Error("Internal Error")); // Reject the promise if there's an error
        }
    });
};
