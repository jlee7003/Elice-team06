import { Main } from "@/components/common/Main";
import { AdminContainer, TabTitle, Background } from "@/styles/pages/admin-style";

const Admin = () => {
    // todo: admin check

    return (
        <Main>
            <AdminContainer>
                <Background>
                    <TabTitle>정보보기</TabTitle>
                    <TabTitle>대충내용</TabTitle>
                </Background>
            </AdminContainer>
        </Main>
    );
};

export default Admin;
