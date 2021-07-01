const Sequelize = require("sequelize");
const sequelize = require("../_helpers/connection");

const SessionQuestion = sequelize.define(
  "session_questions",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    question: { type: Sequelize.STRING, allowNull: true },
  },
  {
    timestamps: false,
  }
);

module.exports = SessionQuestion;
