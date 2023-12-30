const { default: mongoose } = require("mongoose");
const Review = require("../review/review.model");

const bookDetailsByIdService = async (Request, Response, DataModel) => {
    const id = Request.params.id;
    console.log(id);
    const objectId = mongoose.Types.ObjectId;
    const query = { _id: new objectId(id) };
    const book = await DataModel.aggregate([
        { $match: query }
    ])
    console.log(book);
    const reviews = await Review.aggregate([
        {$match:{BookID:id}}
    ])
    const data = {
        ...book, reviews
    }
    return data;
}

module.exports = bookDetailsByIdService;