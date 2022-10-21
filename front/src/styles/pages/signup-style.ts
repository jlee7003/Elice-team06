import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
import bannerImg from "@/assets/banner_img.jpg";

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: auto !important;
    /* height: 100vh; */
    height: 80vh;
`;
export const SecondContainer = styled.div`
    display: flex;
    place-items: center;
    width: ${cssUnit.unit.width};
    /* height: 100vh; */
    align-items: baseline;
`;
export const SecondContainer1 = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    /* height: 100vh; */
`;
export const SecondContainer2 = styled.div`
    display: grid;
    width: 50%;
    height: 100vh;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 700px;
`;
export const Input = styled.input`
    width: 411px;
    height: 62px;
    border: 1px solid #d9d9d9;
    margin-bottom: 30px;
    padding: 10px;
    font-size: ${cssUnit.fontSize.normal};
    &::placeholder {
        font-size: ${cssUnit.fontSize.normal};
    }
`;
export const Select = styled.select`
    width: 411px;
    height: 62px;
    border: 1px solid #d9d9d9;
    margin-bottom: 30px;
    padding: 10px;
`;
export const OKButton = styled.button`
    all: unset;
    text-align: center;
    width: 411px;
    height: 62px;
    background-color: ${cssUnit.color.carbongreen};
    border: 0px solid #293e49;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 600;
`;
export const XButton = styled.button`
    all: unset;
    text-align: center;
    width: 411px;
    height: 62px;
    background-color: #c8c8c8;
    border: 0px solid #293e49;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 600;
`;
export const MenuItem = styled.div`
    display: flex;
`;
export const LogoContainer = styled.div`
    display: flex;
    /* height: 200px; */
    justify-content: center;
    align-items: center;
`;
export const Label = styled.span`
    display: block;
    width: 100%;
    padding: 10px 50px;
`;
export const TopImage = styled.span`
    display: block;
    width: 100%;
    height: 181px;
    /* background-color: gray; */
    padding: 10px 50px;
    background-color: #eee;
    background-image: url(${bannerImg});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
`;
