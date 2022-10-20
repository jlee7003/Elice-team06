// import { FooterBar, Gitlab, TeamName, LogoContainer } from "../../styles/common/footer-style";
import {
    FooterBackground,
    FooterContainer,
    Gitlab,
    TeamName,
    LogoContainer,
} from "@/styles/common/footer-style";
import { LogoWhite } from "@/styles/common";
import { GoMarkGithub } from "react-icons/go";
import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";

export interface Props {
    mode?: string;
}

const Footer = () => {
    const [darkMode] = useRecoilState(DarkMode);
    return (
        <FooterBackground mode={darkMode ?? "Light"}>
            <FooterContainer>
                <LogoContainer>
                    <LogoWhite />
                    <TeamName>Team Hot6(2022)</TeamName>
                </LogoContainer>
                <Gitlab>
                    <GoMarkGithub />
                </Gitlab>
            </FooterContainer>
        </FooterBackground>
    );
};

export default Footer;
