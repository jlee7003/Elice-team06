const errorMiddleware = (err, req, res, next) => {
    console.error("\x1b[31m%s\x1b[0m", err);

    res.status(400).send(err.message);
};

export default errorMiddleware;
