const log = require("src/helpers/logger");
const Bussines = require("../../database/models/Bussines.js");
const User = require("../../database/models/User.js");

const postBussines = async (req, res) => {
  try {
    log.info(req.headers);
    console.log(
      "req.body.lastName ",
      req.body.lastName,
      typeof req.body.lastName
    );
    const a = await Bussines.create({
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
const getBussines = async (req, res) => {
  try {
    log.info(req.headers);
    const ok = await Bussines.findAll({
      include: {
        model: User,
        attributes: ["firstName"]
      }
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
  postBussines,
  getBussines
};
