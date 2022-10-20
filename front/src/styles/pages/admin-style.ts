import assets from "@/lib/assets";
import cssUnit from "@/lib/cssUnit";
import styled from "styled-components";

export const AdminContainer = styled.section`
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
`;

export const TabTitle = styled.span`
    width: ${cssUnit.unit.width};
    height: 30%;

    color: white;
    font-size: ${cssUnit.fontSize.large};

    background-color: black;
    opacity: 0.7;
`;

const bonobono = assets("bonobono.jpg");

export const Background = styled.div`
    width: ${cssUnit.unit.width};
    height: 800px;

    background-image: url(${bonobono});
    background-size: 100% 100%;
`;
