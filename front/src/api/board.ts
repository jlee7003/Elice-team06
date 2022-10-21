import API from "./index";
import { WriteBoardData, WriteBoardResult } from "@/types/boardsData";

export const writeboard = async (WriteBoardData: WriteBoardData) => {
    const result = await API.post<WriteBoardResult>(["board"], WriteBoardData);
    window.location.reload(); //for refresh
    return result;
};

export const reWriteBoard = async (param: string | null, WriteBoardData: WriteBoardData) => {
    const result = await API.put<WriteBoardResult>(["board", param], WriteBoardData);
    return result;
};
