import { Request, Response, NextFunction } from "express";

const asyncHandler = (fn: (req: Request, res: Response) => Promise<void>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res);
        } catch (err) {
            next(err);
        }
    };
};

export default asyncHandler;
