const updateService = async (Request, Response, DataModel) => {
  const postBody = Request.body;
  const id = Request.params.id;
  const query = {
    _id: id,
  };
  const data = await DataModel.updateOne(query, postBody);
  console.log(Request.body);
  console.log(data);
  return data;
};

module.exports = updateService;
