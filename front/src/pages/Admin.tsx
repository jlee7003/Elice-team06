import { useState, useEffect, useMemo, MouseEvent } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import userState from "@/recoil/user";
import modalState from "@/recoil/modalState";

import { ROUTES } from "@/routes";
import { Main } from "@/components/common/Main";
import ChallengeRequestModal from "@/modal/ChallengeRequestModal";

import API from "@/api";
import {
    AdminContainer,
    AdminBox,
    AdminBoxHeader,
    AdmintBoxNav,
    AdminBoxNavButton,
    AdminTitle,
    AdminButton,
    DataWrap,
    DataBox,
    DataLow,
    Background,
} from "@/styles/pages/admin-style";

const params = {
    sealevel: "sealevel",
    emission: "emission",
    temperture: "temperture",
};

const Admin = () => {
    const user = useRecoilValue(userState);
    const [onModal, setOnModal] = useRecoilState(modalState);

    //
    const [data, setData] = useState<
        | {
              year?: number;
              sea_level?: number;
              World?: number;
              USA?: number;
              EU?: number;
              China?: number;
          }[]
        | null
    >(null);
    const [currentData, setCurrentData] = useState("sealevel");

    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user.admin === false) {
            // navigate(ROUTES.ErrorPage.path);
        }

        API.get<{ year: number; sea_level: number }[]>(["data", currentData]).then((res) => {
            if (res === null) {
                return;
            }
            setData(res.data);
        });
    }, [currentData]);

    const low = useMemo(() => {
        if (data === null) {
            return null;
        }

        return data.map((item, idx) => {
            switch (currentData) {
                case "sealevel":
                    return (
                        <DataBox key={idx}>
                            <DataLow>{item.year}</DataLow>
                            <DataLow>sea level : {item.sea_level}</DataLow>
                        </DataBox>
                    );
                case "emission":
                    return (
                        <DataBox key={idx}>
                            <DataLow>{item.year}</DataLow>
                            <DataLow> World : {item.World}</DataLow>
                            <DataLow> USA : {item.USA}</DataLow>
                            <DataLow> EU : {item.EU}</DataLow>
                            <DataLow> China : {item.China}</DataLow>
                        </DataBox>
                    );
                case "temperture":
                    return (
                        <DataBox key={idx}>
                            <DataLow>{item.year}</DataLow>
                            <DataLow> World : {item.World}</DataLow>
                            <DataLow> USA : {item.USA}</DataLow>
                            <DataLow> EU : {item.EU}</DataLow>
                            <DataLow> China : {item.China}</DataLow>
                        </DataBox>
                    );
            }
        });
    }, [data]);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as any;

        setCurrentData(params[name]);
    };

    const onClickOpenModal = () => {
        setOnModal("challenge");
    };

    return (
        <Main>
            {data && (
                <AdminContainer>
                    <Background>
                        <AdminBox>
                            <AdminBoxHeader>
                                <AdminTitle>환경 데이터</AdminTitle>
                                <AdminButton onClick={onClickOpenModal}>
                                    <i className="ri-add-line"></i>챌린지 추가
                                </AdminButton>
                            </AdminBoxHeader>
                            <AdmintBoxNav>
                                <AdminBoxNavButton name="sealevel" onClick={onClick}>
                                    연간 해수면 변화량
                                </AdminBoxNavButton>
                                <AdminBoxNavButton name="emission" onClick={onClick}>
                                    5개국 탄소 배출량
                                </AdminBoxNavButton>
                                <AdminBoxNavButton name="temperture" onClick={onClick}>
                                    5개국 온도 변화량
                                </AdminBoxNavButton>
                            </AdmintBoxNav>
                            <DataWrap>{low}</DataWrap>
                        </AdminBox>
                    </Background>
                </AdminContainer>
            )}
            {onModal == "challenge" && (
                <ChallengeRequestModal
                    setOnModal={setOnModal}
                    addfunction={alert}
                ></ChallengeRequestModal>
            )}
        </Main>
    );
};

export default Admin;
