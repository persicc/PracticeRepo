const index = async (req, res) => {
  const [blogs] = await db.query("select * from blogs");
  res.json(blogs);
};

const getOne = (req, res) => {
  const { id } = req.params;
  const [blog] = db.query(`select * from blog where id = ${id}`);
  res.json(blog);
};

module.exports = {
  index,
};
