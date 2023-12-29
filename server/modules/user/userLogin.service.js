const { generateToken } = require("../../Utility/jwt");

const UserLoginService = async (req, DataModel) => {
  const { Email, Password } = req.body;
  const user = await DataModel.findOne({ Email });
  if (user && (await user.comparePassword(Password))) {
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
