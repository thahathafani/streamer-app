"use server";

export const onFollow = (id: string) => {
    try{
        console.log("I am an Api call", id);
    } catch (error){

        throw new Error("Internal Error");
    }
}