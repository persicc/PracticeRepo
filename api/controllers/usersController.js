const index = (req, res) => {
  console.log("Success");
};

const getOne = (req, res) => {
  const { id } = req.params;
  const [user] = db.query(`select * from users where id = ${id}`);
  res.json(user);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query(
    `update users set name = ${name}, email = ${email} where id = ${id}`
  );
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  db.query(`delete from users where id = ${id}`);
};

module.exports = {
  index,
  getOne,
  update,
  deleteOne,
};
