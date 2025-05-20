const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token)
  try {
    const verified = jwt.verify(token,process.env.JWT_SECERT);
    req.user = verified;
    next();
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
};
module.exports = auth;