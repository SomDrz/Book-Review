
// create jwt token
const jwt = require("jsonwebtoken");
const generateToken = (payload) => jwt.sign(payload,process.env.JWT_SECERT, { expiresIn: "8h" });
module.exports = { generateToken };
