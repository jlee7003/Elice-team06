import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import { dataService } from "../../services/dataService";

const dataRoute = Router();

// parameter =>
// {sealevel: 연간 해수면 변화량, emission: 5개국 탄소 배출량, temperture: 5개국 온도 변화량}
dataRoute.get(
    "/data/:parameter",
    asyncHandler(async (req, res) => {
        try {
            const parameter = req.params.parameter;

            const data = await dataService.getdata(parameter);
            res.status(200).send(data);
        } catch (error) {
            res.status(404).send(error.message);
        }
    })
);

export default dataRoute;
