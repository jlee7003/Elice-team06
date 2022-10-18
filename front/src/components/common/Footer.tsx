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
const Footer = () => {
    return (
        <FooterBackground>
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
