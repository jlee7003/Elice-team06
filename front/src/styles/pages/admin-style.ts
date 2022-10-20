import assets from "@/lib/assets";
import cssUnit from "@/lib/cssUnit";
import styled from "styled-components";

export const AdminContainer = styled.section`
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
`;

export const AdminBox = styled.div`
    width: 1175px;
    height: 700px;

    background-color: black;

    opacity: 0.7;
`;

export const AdminBoxHeader = styled.div`
    display: flex;
    justify-content: center;

    position: relative;

    width: 100%;
    height: 15%;
`;

export const AdmintBoxNav = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
`;

export const AdminBoxNavButton = styled.button`
    color: white;
    font-size: ${cssUnit.fontSize.medium};

    & + & {
        margin-left: 30px;
    }
`;

export const AdminTitle = styled.span`
    width: fit-content;
    height: 30%;

    color: white;
    font-size: ${cssUnit.fontSize.large};
`;

export const AdminButton = styled(AdminTitle)`
    position: absolute;
    top: 10px;
    right: 10px;

    font-size: ${cssUnit.fontSize.medium};
`;

export const DataBox = styled.div`
    width: 100%;
    height: fit-content;

    overflow-y: scroll;
`;

export const DataLow = styled.span`
    color: white;
    font-size: ${cssUnit.fontSize.medium};
`;

const bonobono = assets("bonobono.jpg");

export const Background = styled.div`
    display: grid;
    place-items: center;

    width: ${cssUnit.unit.width};
    height: 800px;

    background-image: url(${bonobono});
    background-size: 100% 100%;
`;
