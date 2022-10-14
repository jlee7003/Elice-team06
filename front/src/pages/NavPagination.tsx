/*lib*/
import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Posts } from "@/lib/dummyPosts";
/*styles*/

import { Nav, NavLink, NaviLink, Main } from "@/styles/pages/reqpage-style";

//dummies
import post from "@/lib/dummyPosts";

const NavPagination = (prop: { value: Posts }) => {
    /** will be used with props */
    /*차후 서버에서 받은 데이터를 props로 함께 사용할 것
    현재 페이지, pagination의 범위 단위, 총 페이지 넘버 수, 페이지 넘버(배열)*/
    const currentPage = useRef<number>(1); //default page : 1
    const blockNum = 5; //set pagination scope unit
    const totalPages = Object.keys(post).length;
    const postKeyArr = Object.keys(post); //['1','2','3','4'...]
    /*-------------------------------------------------------*/
    /**To know how many blocks would be created(by slicing)  
     블록(block)은 <<1,2,3,4,5>> 에서의 [1,2,3,4,5] 를 뜻한다.
     앞으로 얼마나 많은 블록이 생성될 것인가?* 
    */
    // Get numbers of blocks
    /*총 페이지 개수를 블록단위로 나누어 생성될 블록의 개수를 구한다.*/
    const blockNumbers = Math.ceil(totalPages / blockNum) + 1;
    /*서버에서 보내줄 때 이미 포스트들을 한 페이지씩 담아 보내주었으므로
    받은 데이터에서 페이지 범위 단위(unit, 5)개씩 끊어서 배열을 생성할 필요가 있다.
    그래야 향후 map으로 <<1,2,3,4,5>>를 그릴 수 있다고 생각함.*/

    /* To get arrays of nav(pagination)
    아래와 같이 끊어주기 위해서....
    navArr=[['1', '2', '3', '4', '5'],['6','7','8','9','10],['7',...]]*/

    const navArr: any = [];
    for (let i = 0; i < blockNumbers; i++) {
        navArr[i] = postKeyArr.slice(i * 5, (i + 1) * 5);
    }
    //const firstNav = postKeyArr.slice(0, 5); //['1', '2', '3', '4', '5']

    /*현재 페이지가 어떤 블록에 있는지도 알아야 함*/
    let [currentBlockNum, setCurrBlockNum] = useState(Math.floor(currentPage.current / blockNum));
    //한 블록 내부에서의 시작숫자와 끝 숫자
    const startNum = useRef<number>(parseInt(Object.keys(post)[0]));
    const endNum = useRef<number>(startNum.current + blockNum - 1);
    //Usenavigate
    const navigate = useNavigate();
    const navtesting = (num: number) => {
        currentPage.current += num;
        navigate(`start=${startNum.current}&end=${endNum.current}&dpage=${currentPage.current}`);
    };

    // [ << ]
    const settingPrev = () => {
        if (currentBlockNum < 1) {
            startNum.current = 1;
            endNum.current = startNum.current + blockNum - 1;
        } else {
            setCurrBlockNum(currentBlockNum - 1);
            console.log("currentBlockNum", currentBlockNum);
            startNum.current = parseInt(navArr[currentBlockNum - 1][0]);
            endNum.current = parseInt(
                navArr[currentBlockNum - 1][navArr[currentBlockNum - 1].length - 1]
            );
        }

        console.log(`start=${startNum.current}&end=${endNum.current}&page=${endNum.current}`);
    };
    // [ >> ]
    const settingNext = () => {
        if (currentBlockNum + 1 > blockNumbers) {
            startNum.current = parseInt(navArr[currentBlockNum][0]);
            endNum.current = startNum.current + blockNum - 1;
        } else {
            setCurrBlockNum(currentBlockNum + 1);
            console.log("currentBlockNum", currentBlockNum);
            startNum.current = parseInt(navArr[currentBlockNum][0]);
            console.log("startNum.current", startNum.current);
            endNum.current = parseInt(
                navArr[currentBlockNum - +1][navArr[currentBlockNum + 1].length - 1]
            );
        }
        console.log(`start=${startNum.current}&end=${endNum.current}&page=${startNum.current}`);
    };

    return (
        <Main>
            <Nav>
                <ul>
                    <NaviLink onClick={settingPrev}>
                        <span>&lt;</span>
                    </NaviLink>
                    {navArr[currentBlockNum].map((navNum: any, idx: number) => (
                        <NaviLink key={idx} onClick={() => navtesting(idx)}>
                            {parseInt(navNum)}
                        </NaviLink>
                    ))}
                    <NaviLink onClick={settingNext}>
                        <span>&gt; </span>
                    </NaviLink>
                </ul>
            </Nav>
        </Main>
    );
};
export default NavPagination;

//navArr=[ ['1', '2', '3', '4', '5'],['6']]

// const memos=useMemo(()=>{
//     for (let i = 0; i < blockNumbers; i++) {
//         navArr[i] = postKeyArr.slice(i * 5, (i + 1) * 5);
//         console.log(`navArr[${i}]= `, navArr[i]);
//         //result.push(...postKeyArr.slice(i, i + 5));
//         //console.log(`resutl ${i}번째임?: `, result);
//         return
//     }
// },[])

// const num = parseInt(navArr[currentBlockNum][currentPage.current]);
// if (num < 1) {
//     return (startNum.current = 1);
// } else {
//     return (startNum.current = num);
// }

//for testing

// const preNav1 = () => {
//     if (currentBlockNum - 1 < 1) {
//         startNum.current = 1;
//         endNum.current = startNum.current + blockNum - 1;
//     } else {
//         currentBlockNum -= 1;
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = parseInt(navArr[currentBlockNum][navArr[currentBlockNum].length - 1]);
//     }
//     console.log("currentBlockNum", currentBlockNum);
//     console.log(
//         "prev",
//         `start=${startNum.current}&end=${endNum.current}&page=${endNum.current}`
//     );
// };

// const nextNav1 = () => {
//     if (currentBlockNum + 1 >= blockNumbers) {
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = startNum.current + blockNum - 1;
//     } else {
//         currentBlockNum += 1;
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = parseInt(navArr[currentBlockNum][navArr[currentBlockNum].length - 1]);
//     }
//     console.log("currentBlockNum", currentBlockNum);
//     console.log(
//         "next ",
//         `start=${startNum.current}&end=${endNum.current}&page=${startNum.current}`
//     );

// const settingPrev = () => {
//     const num = parseInt(navArr[currentBlockNum][currentPage.current]);
//     if (num < 1) {
//         return (startNum.current = 1);
//     } else {
//         return (startNum.current = num);
//     }
// }; //default first nav num: 1
// const settingNext = () => {
//     const num = parseInt(navArr[currentBlockNum][currentPage.current]) + blockNum - 1;
//     console.log("next안쪽,", num);
//     if (num > totalPages) {
//         return (endNum.current = totalPages);
//     } else {
//         return (endNum.current = num);
//     }
// };

// //testing codes -------------------------
// const CheckingButtonClick = () => {
//     console.log("navArr[currentBlockNum]", navArr[currentBlockNum]);
//     console.log(currentPage.current);
//     console.log("prev", startNum.current);
//     console.log("next", endNum.current);
//     console.log("navArr[currentBlockNum]", navArr[currentBlockNum]);
//     console.log("currentBlockNum", currentBlockNum);
// };
// const preNav1 = () => {
//     if (currentBlockNum - 1 < 1) {
//         startNum.current = 1;
//         endNum.current = startNum.current + blockNum - 1;
//     } else {
//         currentBlockNum -= 1;
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = parseInt(navArr[currentBlockNum][navArr[currentBlockNum].length - 1]);
//     }
//     console.log("currentBlockNum", currentBlockNum);
//     console.log(
//         "prev",
//         `start=${startNum.current}&end=${endNum.current}&page=${endNum.current}`
//     );
// };

// const nextNav1 = () => {
//     if (currentBlockNum + 1 >= blockNumbers) {
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = startNum.current + blockNum - 1;
//     } else {
//         currentBlockNum += 1;
//         startNum.current = parseInt(navArr[currentBlockNum][0]);
//         endNum.current = parseInt(navArr[currentBlockNum][navArr[currentBlockNum].length - 1]);
//     }
//     console.log("currentBlockNum", currentBlockNum);
//     console.log(
//         "next ",
//         `start=${startNum.current}&end=${endNum.current}&page=${startNum.current}`
//     );
// };

// <button onClick={preNav1}>이전버튼??</button>
// <button onClick={CheckingButtonClick}>current??</button>
// <button onClick={nextNav1}>다음버튼?</button>
