const Bussines = require("../database/models/Bussines.js");
const User = require("../database/models/User.js");

//uno a uno
Bussines.hasOne(User);
User.belongsTo(Bussines);
// uno a muchos
