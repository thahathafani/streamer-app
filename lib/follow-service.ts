import { db } from "@/lib/db"
import { getSelf } from "./auth-service";

export const isFollowingUser = async (id: string) => {
    try {
        const self = await getSelf();

        const otherUser = await db.user.findUnique({
            where: { id },
        });

        if (!otherUser) {
            throw new Error("User not found");
        }
        // if the user id match to the user then we don't need to search it on our db.
        if (otherUser.id === self.id){
            return true;
        }


        // checking the user following:

        const existingFollow = await db.follow.findMany({
            where: {
                followerId: self.id,
                followingId: otherUser.id,
            },
        });

        return !!existingFollow;

    } catch {
        return false;

    }
}