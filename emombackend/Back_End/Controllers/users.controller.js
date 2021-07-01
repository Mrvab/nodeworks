const express = require("express");
const router = express.Router();
const sequelizeServices = require("../services/sequelize.service");

//models
const User = require("../models/user.model");
// routes

router.post("/authenticate", authenticate);
router.post("/updateProfile", updateUserProfile);
router.get("/getProfile", getUserprofile);

module.exports = router;

function authenticate(req, res) {
  sequelizeServices.loginUser(User, req.body, (data) => res.json(data));
}

function getUserprofile(req, res) {
  const userId = req.query.id;
  sequelizeServices.findById(User, userId, (data) => res.json(data));
}

function updateUserProfile(req, res, next) {
  sequelizeServices.updateData(User, req.body, (data) => res.json(data));
}
