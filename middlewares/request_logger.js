// middlewares/request_logger.js

function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next();
}

module.exports = requestLogger;
