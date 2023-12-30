const { generateToken } = require("../../Utility/jwt");

const UserLoginService = async (Request,Response, DataModel) => {
  const { Email, Password } = Request.body;
  const user = await DataModel.findOne({ Email });
  const matched = await user.comparePassword(Password)
  
  if (!user || !matched) {
    throw Error("Login Failed")
  }
  if (user && matched) {
    const loggedUser = {
      token: generateToken(user._id),
      user: {
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
      },
    };
    console.log(loggedUser);
    return loggedUser;
  } 
};
module.exports = UserLoginService;
