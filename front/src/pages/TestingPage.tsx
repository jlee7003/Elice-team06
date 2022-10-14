import NavPagination from "./NavPagination";
import post from "@/lib/dummyPosts";
const TestingPage = () => {
    return (
        <>
            <NavPagination value={post}></NavPagination>
        </>
    );
};
export default TestingPage;
