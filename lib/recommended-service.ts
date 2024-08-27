import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { User } from '@prisma/client'; // Ensure this import is correct

export const getRecommended = async (): Promise<User[]> => {
    let userId: string | null = null;

    try {
        const self = await getSelf();
        userId = self.id;
    } catch {
        userId = null;
    }
    
    let users: User[] = []; // Explicitly type the users array
    
    if (userId) {
        users = await db.user.findMany({
            where: {
                NOT: {
                    id: userId,
                },
            },
            orderBy: {
                createdAt: "desc"
            }
        });
    } else {
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });
    }
    
    return users;
};
