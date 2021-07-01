const Sequelize = require("sequelize");
const sequelize = require("../_helpers/connection");

const Note = sequelize.define(
  "notes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    userId: { type: Sequelize.INTEGER, allowNull: false },

    sessionQuestionId: { type: Sequelize.INTEGER, allowNull: true },

    note: { type: Sequelize.STRING, allowNull: true },

    isCompleted: { type: Sequelize.TINYINT },

    createdAt: { type: Sequelize.BIGINT },

    updatedAt: { type: Sequelize.BIGINT },
  },
  {
    timestamps: false,
  }
);

module.exports = Note;
