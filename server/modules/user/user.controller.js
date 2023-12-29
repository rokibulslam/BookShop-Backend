const User = require("./user.model");
const userCreateService = require("./userCreate.service");


exports.registration = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        if (!Name || !Email || !Password) {
            return res.status.json({
              status: "fail",
              message: "Input field can not be empty!",
            });            
        }
        const userExist = await User.findOne({ Email });
        if (userExist) {
          return res
            .status(400)
            .json({ status: "fail", message: "User already exist" });
        }
        const user = await userCreateService(req, User);
         res.status(201).json({ status: "success", data: user });
    } catch (error) {
        res.status(400).json({
          status: "fail",
          message: "Failed to create user",
          error: error.toString(),
        });
    }
}
exports.login = async (req, res) => {

};