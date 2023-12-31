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
    const reviewQuery={BookID:id}
    console.log(book);
    const reviews = await Review.find({ BookID: id });
    console.log(reviews);
    const data = {
        ...book, reviews
    }
    return data;
}

module.exports = bookDetailsByIdService;