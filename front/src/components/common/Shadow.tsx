import styled from "styled-components";

const ShadowStyle = styled.div`
    width: 200%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
`;

const Shadow = () => {
    return <ShadowStyle></ShadowStyle>;
};

export default Shadow;
