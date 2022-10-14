import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const ModalContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;

    width: 400px;
    height: 300px;

    /* display: none; */

    /* background-color: rgba(0, 0, 0, 0.4); */
    z-index: 2;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 100px;
    }
`;

export const ModalBody = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 400px;
    height: 300px;

    padding: 15px;

    text-align: center;

    background-color: rgb(255, 255, 255);
    /* border-radius: 10px; */
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    transform: translateX(-50%) translateY(-50%);
`;
// export const flexbox = styled.div<Props>`
//     width: 100%;
//     height: 40%;

//     border-radius: 24px 24px 0 0;

//     ${(props) =>
//         props.level == "beginner"
//             ? cssUnit.color.green
//             : props.level == "intermediate"
//             ? cssUnit.color.blue
//             : props.level == "advanced"
//             ? cssUnit.color.purple
//             : cssUnit.color.gray}
// `;

export const Button = styled.button`
    all: unset;
    height: 55px;
    margin: 0px 10px;
    border: 0px solid #293e49;
    border-radius: 10px;
    background-color: #61be92;
    color: white;
    text-align: center;
`;
export const MoveToNextPage = styled.button`
    color: #5a5a5a;
    background-color: transparent;
    border: none;
    font-size: 25px;
    position: left;
    cursor: pointer;
`;
export const MoveToFirstPage = styled.button`
    width: 25px;
    height: 37px;
    margin: 0 0 0 0;
    border: none;
    color: black;
    background-color: transparent;
    cursor: pointer;
`;
export const MoveToLastPage = styled.button`
    width: 115px;
    height: 37px;
    margin: 0 0 0 0;
    border: none;
    color: black;
    background-color: transparent;
    cursor: pointer;
`;
export const Flexbox = styled.div`
    display: flex;
`;
export const PageBtn = styled.button`
    width: 49px;
    height: 49px;
    margin: 0 10px;
    border: none;
    color: black;
    text-align: center;
    font-size: 20px;
    opacity: 0.65;
    &:hover {
        background-color: ${cssUnit.color.carbongreen};
        cursor: pointer;
        border-radius: 30px;
        transform: translateY(-2px);
    }
`;
