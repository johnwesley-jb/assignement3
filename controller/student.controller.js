const studentsList = require("../data/students.json");

module.exports.getAll = (req, res) => {
  res.status(200).json(studentsList);
};

module.exports.getById = (req, res) => {
  let id = req.params.id - 1;
  id = parseInt(id);
  id = id;
  res.status(200).send(studentsList[id]);
};
