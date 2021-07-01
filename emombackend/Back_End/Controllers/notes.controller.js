const express = require("express");
const router = express.Router();
const sequelizeServices = require("../services/sequelize.service");

//models
const Note = require("../models/notes.model");

// routes

router.get("/list", getNotesList);
router.post("/createNote", createNotes);
router.post("/updateNote", updateNotes);
router.post("/setStatus", setNoteStatus);

module.exports = router;

function getNotesList(req, res) {
  const userId = req.query.userId;
  sequelizeServices.findById(Note, userId, (data) => res.json(data));
}

function createNotes(req, res) {
  sequelizeServices.addData(Note, req.body, (data) => res.json(data));
}

function updateNotes(req, res) {
  sequelizeServices.updateData(Note, req.body, (data) => res.json(data));
}

function setNoteStatus(req, res, next) {
  sequelizeServices.updateData(Note, req.body, (data) => res.json(data));
}
