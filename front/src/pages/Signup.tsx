import { Container, LogoContainer, TopImage } from "../styles/pages/signup-style";
import { Main } from "@/components/common/Main";
import { Logo } from "@/styles/common";
import SignUpForm from "@/components/SignUpForm";
const Signup = () => {
    return (
        <>
            <TopImage />
            <Main>
                <Container>
                    <div>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                        <SignUpForm />
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default Signup;
