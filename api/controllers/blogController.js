const index = (req, res) => {
  console.log("Success");
};

const getOne = (req, res) => {
  const { id } = req.params;
  const [blog] = db.query(`select * from blog where id = ${id}`);
  res.json(blog);
};

module.exports = {
  index,
};
