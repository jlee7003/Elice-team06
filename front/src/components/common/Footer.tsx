// import { FooterBar, Gitlab, TeamName, LogoContainer } from "../../styles/common/footer-style";
import {
    FooterBackground,
    FooterContainer,
    Gitlab,
    TeamName,
    LogoContainer,
} from "@/styles/common/footer-style";
import { Logo } from "@/styles/common";
import { GoMarkGithub } from "react-icons/go";
const Footer = () => {
    return (
        <FooterBackground>
            <FooterContainer>
                <LogoContainer>
                    <Logo />
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
