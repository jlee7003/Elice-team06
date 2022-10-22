import API from "./index";
import { writeBoardData, writeBoardResult } from "@/types/boardsData";

export const writeBoard = async (writeBoardData: writeBoardData) => {
    const result = await API.post<writeBoardResult>(["board"], writeBoardData);
    window.location.reload(); //for refresh
    return result;
};

export const rewriteBoard = async (param: string | null, writeBoardData: writeBoardData) => {
    const result = await API.put<writeBoardResult>(["board", param], writeBoardData);
    return result;
};
