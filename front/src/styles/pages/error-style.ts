import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
import erorr_img from "@/assets/error_image.png";

export const Container = styled.div`
    width: ${cssUnit.unit.width};
    height: calc(100vh - 180px) !important;
    background: url(${erorr_img}) no-repeat center bottom -45px / 1300px;
`;

export const LoadingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 230px;
    height: auto;
    margin-left: -115px;
    margin-top: -50px;
`;

export const LoadingText = styled.p`
    padding-top: 20px;
    font-size: 20px;
    line-height: 27px;
    color: #343434;
    text-align: center;
`;
