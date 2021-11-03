const log = require("src/helpers/logger");
const User = require("../../database/models/User.js");
const postUser = async (req, res) => {
  try {
    log.info(req.headers);
    console.log(
      "req.body.lastName ",
      req.body.lastName,
      typeof req.body.lastName
    );
    const a = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    });
    res.json(a);
  } catch (e) {
    console.error(e.errors[0]);

    res.status(500).json({ codRes: 99, message: e.errors[0] });
  }
};
const getUsers = async (req, res) => {
  try {
    log.info(req.headers);
    const ok = await User.findAll({
      include: "BussinesId",
      attributes: ["firstName", "lastName"]
    });
    console.log("ok ", ok);
    res.json(ok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ codRes: 99 });
  }
};
const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
  postUser,
  getUsers
};
