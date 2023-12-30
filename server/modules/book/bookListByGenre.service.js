const bookListByGenre = async(Request, Response, DataModel) => {
    const params = Request.params.genre;
    const query = { Genre: params };
    const data = await DataModel.aggregate([{ $match: query }]);
    return data
}
module.exports = bookListByGenre;