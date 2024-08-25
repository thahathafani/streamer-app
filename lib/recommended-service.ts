//recommended services for reusing the recommended list on various areas of the projects!

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const users = await db.user.findMany({
        orderBy: {
            createdAt: "desc"
        },
    });
    return users;
};  