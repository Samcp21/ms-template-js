const jwt = require("jsonwebtoken");

const generateAccessToken = payload => {
  return jwt.sign(payload, process.env.KUNTE_CUBA_JWT, { expiresIn: "1800s" });
};

module.exports = {
  generateAccessToken
};
