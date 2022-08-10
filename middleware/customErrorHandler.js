module.exports = customErrorHandler = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({error: {message}});
};