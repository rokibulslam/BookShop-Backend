const { default: mongoose } = require("mongoose");

const bookDeleteService = async (Request, Response, DataModel) => {
    const bookId = Request.params.id;
    const data = await DataModel.deleteOne({
      _id:new mongoose.Types.ObjectId(bookId),
    }).exec();

    console.log(data, bookId);
    return data;
}
module.exports = bookDeleteService;