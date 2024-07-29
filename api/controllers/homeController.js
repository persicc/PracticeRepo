const index = async (req, res) => {
  const [[blogs]] = await db.query("select * from blog");
  res.redner("/home", { blogs });
};

module.exports = {
  index,
};
