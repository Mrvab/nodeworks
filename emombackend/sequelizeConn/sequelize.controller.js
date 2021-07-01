const express = require("express");

const router = express.Router();
sequelizeServices = require("../services/sequelize.service");

//models
const Lookup = require("./models/lookup");
const Note = require("./models/notes");
const Resource = require("./models/resource");
const Session = require("./models/session");
const SessionQuestion = require("./models/sessiOn_question");
const User = require("./models/user");
const Video = require("./models/videos");

//routes
router.get("/sessions", getSessionList);
router.get("/videos", getVideosList);
router.get("/questions", getQuestionsList);
router.get("/resources", getResourcesList);
router.get("/lookup", getLookup);

module.exports = router;

function getSessionList(req, res, next) {
  sequelizeServices
    .findAllData(Session)
    .then((data) => {
      console.log("the dAta,", data);
      return res.json(data);
    })
    .catch((next) => {
      console.log("the dAta,", next);
    });
}

function getVideosList(req, res, next) {
  sequelizeServices
    .findAllData(Video)
    .then((data) => res.json(data))
    .catch(next);
}

function getQuestionsList(req, res, next) {
  sequelizeServices
    .findAllData(SessionQuestion)
    .then((data) => res.json(data))
    .catch(next);
}
function getResourcesList(req, res, next) {
  sequelizeServices
    .findAllData(Resource)
    .then((data) => res.json(data))
    .catch(next);
}
function getLookup(req, res, next) {
  sequelizeServices
    .findAllData(Lookup)
    .then((data) => res.json(data))
    .catch(next);
}
