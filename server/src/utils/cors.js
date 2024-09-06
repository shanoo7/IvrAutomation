import { allowlist } from "../server.js";


let corsOptions = { withCredentials: true, credentials: true };
const corsOptionsDelegate = function (req, callback) {
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions.origin = true;
  } else {
    corsOptions.origin = false;
  }
  callback(null, corsOptions);
};

export { corsOptionsDelegate };