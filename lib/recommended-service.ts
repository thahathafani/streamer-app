//recommended services for reusing the recommended list on various areas of the projects!

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {
    const users = await db.user.findMany({
        orderBy: {
            createdAt: "desc"
        },
    });
    return users;
}  