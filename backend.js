const users = localStorage.getItem("users");
document.getElementById("#div").addEventListener("click", (e) => {});

if (!users) {
  const userscollection = [];
  localStorage.setItem("users", JSON.stringify(userscollection));
}

const index = async (req, res) => {
  const usersList = JSON.parse(localStorage.getItem("users"));
  for (let user of usersList) {
    res.json(user);
  }
};

const store = async (req, res) => {
  const { username, email } = req.body;
  localStorage.setItem("users", JSON.stringify({ username, email }));
};
