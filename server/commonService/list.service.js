const listService = async (Request, Response, DataModel) => {
   
    const data = await DataModel.find({}).toArray();
    return data;
};
module.exports = listService;
