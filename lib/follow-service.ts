import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

// Function to check if the current user is following the user with the given ID
export const isFollowingUser = async (id: string): Promise<boolean> => {
    try {
        const self = await getSelf();

        // Await the result to get the user object or null
        const otherUser = await db.user.findUnique({
            where: { id },
        });

        if (!otherUser) {
            throw new Error("User not found");
        }

        // If the other user is the same as the current user
        if (otherUser.id === self.id) {
            return true;
        }

        // Check if there is a follow relationship
        const existingFollow = await db.follow.findMany({
            where: {
                followerId: self.id,
                followingId: otherUser.id,
            },
        });

        return existingFollow.length > 0;
    } catch (error) {
        console.error("Error checking following status:", error);
        return false;
    }
};

// Function to follow a user
export const followUser = async (id: string): Promise<void> => {
    try {
        const self = await getSelf();

        // Await the result to get the user object or null
        const otherUser = await db.user.findUnique({
            where: { id },
        });

        if (!otherUser) {
            throw new Error("User not found");
        }

        if (otherUser.id === self.id) {
            throw new Error("Cannot follow yourself");
        }


        // Create a new follow record
        const existingFollow = await db.follow.findFirst({
            where: {
                followerId: self.id,
                followingId: otherUser.id,
            },
        });
        if (existingFollow) {
        throw new Error("Already Following");  // Propagate error to be handled by caller if needed
        }
        
        // Create a new follow record
        const follow = await db.follow.create({
            data: {
                followerId: self.id,
                followingId: otherUser.id,
            },
            include: {
                follower: true,
                followed: true,
            }
        });
    } catch (error) {
        console.error("Error following user:", error);
        throw error;  // Propagate error to be handled by caller if needed
    }
};
