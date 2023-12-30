const createService = async (Request, Response, DataModel) => {
  const postBody = Request.body;
  const data = await DataModel.create(postBody);
  return data;
};

module.exports = createService;
