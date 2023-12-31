const createService = require("../../commonService/create.service");
const Review = require("./review.model");

exports.createBook = async (req, res) => {
  try {
    console.log(req.body);
    const data = await createService(req, res, Review);
    res.status(200).json({
      status: "success",
      message: "Review created successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Review creation failed",
      error: error.toString(),
    });
  }
};
