import React from "react";
import cssUnit from "@/lib/cssUnit";
import styled from "styled-components";

export const Main = styled.main`
    /* width: ${cssUnit.unit.width};
    height: 100vh;
    margin: 0 auto; */
    width: ${cssUnit.unit.width};
    height: auto;
    min-height: 1000px;
    padding-top: 70px;
    padding-bottom: 120px;
    margin: auto;
`;

// interface Props {
//     children: React.ReactNode;
// }

// const Main = ({ children }: Props) => {
//     return <MainStyle>{children}</MainStyle>;
// };

// export default Main;
