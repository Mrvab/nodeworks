const config = require("config.json");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const Note = require("../models/notes.model");
module.exports = {
  addData,
  findAllData,
  findById,
  updateData,
  loginUser,
};

function addData(model, inData, outData) {
  return model
    .create(inData)
    .then((result) => {
      return outData({ isError: false, result });
    })
    .catch((err) => {
      console.log(err);
      return outData({ isError: true, error: err });
    });
}

function findAllData(model, data) {
  return model
    .findAll({
      exclude: ["password"],
    })
    .then((result) => {
      return data({ isError: false, result });
    })
    .catch((err) => {
      return data({ isError: true, error: err });
    });
}

function findById(model, id, data) {
  const condition =
    model === Note ? { userId: { [Op.eq]: id } } : { id: { [Op.eq]: id } };
  return model
    .findAll({
      where: condition,
      attributes: { exclude: ["password"] },
    })
    .then((result) => {
      return data({ isError: false, result });
    })
    .catch((err) => {
      return data({ isError: true, error: err });
    });
}

function updateData(model, new_data, data) {
  return model
    .update(new_data, {
      where: {
        id: { [Op.eq]: new_data.id },
      },
    })
    .then((result) => {
      return data({ isError: false, result });
    })
    .catch((err) => {
      return data({ isError: true, error: err });
    });
}

function loginUser(model, data, outData) {
  return model
    .findAll({
      where: {
        [Op.and]: [{ username: data.username }, { password: data.password }],
      },
      attributes: { exclude: ["password"] },
    })
    .then((result) => {
      if (result.length <= 0) {
        return outData({
          isError: false,
          error: "email or password is incorrect",
        });
      } else {
        const token = jwt.sign({ sub: result[0].id }, config.secret, {
          expiresIn: "7d",
        });
        result = result[0].dataValues;
        return outData({ isError: false, result: { ...result, token } });
      }
    })
    .catch((err) => {
      return outData({ isError: true, error: err });
    });
}
