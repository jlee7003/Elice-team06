import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import { dataService } from "../../services/dataService";

const dataRoute = Router();

// parameter =>
// {sealevel: 연간 해수면 변화량, emission: 5개국 탄소 배출량, temperture: 5개국 온도 변화량}
dataRoute.get(
    "/getdata/:parameter",
    asyncHandler(async (req, res) => {
        const result = await { "연간 해수면 데이터": 0 }; // Query | ORM으로 데이터 DB에서 import하는 코드

        res.send(result);
    })
);

dataRoute.get(
    "/data/emission",
    asyncHandler(async (req, res) => {
        const result = await { "주요 3개국+전세계 및 한국 탄소 배출량 데이터": 0 };

        res.send(result);
    })
);

dataRoute.get(
    "/data/temperture",
    asyncHandler(async (req, res) => {
        const result = await { "주요 3개국+전세계 및 한국 온도 변화량 데이터": 0 };

        res.send(result);
    })
);

export default dataRoute;
