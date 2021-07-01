const express = require("express");
const router = express.Router();
const sequelizeServices = require("../services/sequelize.service");

//models
const Lookup = require("../models/lookup.model");
const Resource = require("../models/resource.model");
const Session = require("../models/session.model");
const SessionQuestion = require("../models/session_question.model");
const Video = require("../models/videos.model");

// routes
router.get("/sessions", getSessionList);
router.get("/videos", getVideosList);
router.get("/questions", getQuestionsList);
router.get("/resources", getResourcesList);
router.get("/lookup", getLookup);

module.exports = router;

function getSessionList(req, res) {
  sequelizeServices.findAllData(Session, (data) => res.json(data));
}

function getVideosList(req, res) {
  sequelizeServices.findAllData(Video, (data) => res.json(data));
}

function getQuestionsList(req, res) {
  sequelizeServices.findAllData(SessionQuestion, (data) => res.json(data));
}
function getResourcesList(req, res, next) {
  sequelizeServices.findAllData(Resource, (data) => res.json(data));
}
function getLookup(req, res) {
  sequelizeServices.findAllData(Lookup, (data) => res.json(data));
}
