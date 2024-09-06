import { log } from "../loggers/index.js";

export const errorHandler = (err, req, res, next) => {
  log.error(err.stack);
  next({ message: err.message })
};