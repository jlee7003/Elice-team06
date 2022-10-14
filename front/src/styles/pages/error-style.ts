import styled from "styled-components";
import assets from "@/lib/assets";
import cssUnit from "@/lib/cssUnit";

const errorImg = assets("error_image.png");
export const Container = styled.div`
    width: ${cssUnit.unit.width};
    height: calc(100vh - 180px) !important;
    background: url(${errorImg}) no-repeat left bottom -45px / 1300px;
`;

export const LoadingBox = styled.div`
    width: 230px;
    height: auto;
    position: absolute;
    left: 50%;
    margin-left: -115px;
    margin-top: -50px;
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoadingText = styled.p`
    text-align: center;
    font-size: 20px;
    line-height: 27px;
    padding-top: 20px;
    color: #343434;
`;
