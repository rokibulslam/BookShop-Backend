const mongoose = require("mongoose");

const detailsByIdService = async (Request, Response, DataModel) => {
  const id = Request.params.id;
  const objectId = mongoose.Types.ObjectId;
  const query = { _id: new objectId(id) };
  const data = await DataModel.aggregate([{ $match: query }]);
  console.log(data);
  return data[0];
};
module.exports = detailsByIdService;
