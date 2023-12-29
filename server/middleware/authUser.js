const jwt = require("jsonwebtoken");
const User = require("../modules/user/user.model");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // Decode Token
        const decoded = jwt.verify(token, "Seceretkey123456789");
        // set user as res.locals
      res.locals.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res
        .status(401)
        .json({ message: "Not Authorized, token failed", error: error });
    }
  }
};
