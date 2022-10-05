import ChallengeCard from "@components/ChallengeCard";
import { Banner } from "@styles/banner";

interface Props {
    [key: string]: string;
}
const Mypage = (props: Props) => {
    return (
        <div>
            <Banner />
            <myCard>
                <UserName name={props.name} />
                <UserIntro intro={props.intro} />
            </myCard>
            <MyChallenges>
                <p>내가 도전한 챌린지</p>
                <div>
                    <ChallengeCard />
                    <MoreButton />
                </div>
            </MyChallenges>
            <LikeChallenges>
                <p>좋아요 한 챌린지</p>
                <UserChallenge />
                <MoreButton />
            </LikeChallenges>
        </div>
    );
};

export default Mypage;
