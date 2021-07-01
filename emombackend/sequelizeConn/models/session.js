const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Session = sequelize.define(
  "session",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    sessionTitle: { type: Sequelize.STRING, allowNull: true },

    questionsId: { type: Sequelize.STRING, allowNull: true },

    otherResourcesId: { type: Sequelize.STRING, allowNull: true },

    unlockWeek: { type: Sequelize.INTEGER },
    videoId: { type: Sequelize.INTEGER },
  },
  {
    tableName: "session",
    timestamps: false,
  }
);

module.exports = Session;
