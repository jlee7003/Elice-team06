import API from "./index";
import { WriteBoardData, WriteBoardResult } from "@/types/boardsData";
import { Comments } from "@/recoil/commentState";

export const writeboard = async (WriteBoardData: WriteBoardData) => {
    const result = await API.post<WriteBoardResult>(["board"], WriteBoardData);
    return result;
};
