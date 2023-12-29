const { generateToken } = require("../../Utility/jwt");

const userCreateService = async (Request, DataModel) => {
    const user = await DataModel.create(Request.body);
    if (user) {
        const newUser = {
          _id: user._id,
          Name: user.Name,
          Email: user.Email,
          token: generateToken(user._id),
        };
        return newUser
    }
}

module.exports = userCreateService;