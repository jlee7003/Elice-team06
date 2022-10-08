import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import { dataService } from "../../services/dataService";

const dataRoute = Router();

// parameter =>
// {sealevel: 연간 해수면 변화량, emission: 5개국 탄소 배출량, temperture: 5개국 온도 변화량}
dataRoute.get(
    "/getdata/:parameter",
    asyncHandler(async (req, res) => {
        const parameter = req.params.parameter;

        const data = await dataService.getdata(parameter);
        res.send(data);
    })
);

export default dataRoute;
