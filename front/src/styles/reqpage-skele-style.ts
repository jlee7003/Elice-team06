import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

//section
export const SectionSkele = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: ${cssUnit.unit.width};
    height: 1100px;
    margin: 10px;
    padding: 5px;

    z-index: 4;

    //loading
    color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.1)
    );
    background-size: 400% 100%;
    animation: skeleton-loading 8s ease-in-out infinite;

    @keyframes skeleton-loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

//nav
export const NavSkele = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 99%;
    height: 100px;

    margin: 2px;

    z-index: 4;

    & > ul {
        color: #979797;
        text-align: center;
    }
    //loading
    color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.1)
    );
    background-size: 400% 100%;
    animation: skeleton-loading 8s ease-in-out infinite;

    @keyframes skeleton-loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;
