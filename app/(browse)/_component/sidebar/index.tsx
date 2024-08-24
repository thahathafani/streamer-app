import { getRecommended } from "@/lib/recommended-service";
import Recommended from "./recommended";
import Toggle from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
    const recommended = await getRecommended();
    return(
        <Wrapper>
            <Toggle />
            
        </Wrapper>
    );
};