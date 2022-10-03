import { Response, Request, NextFunction } from "express";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("\x1b[31m%s\x1b[0m", err);

    res.status(400).send(err.message);
};

export default errorMiddleware;
