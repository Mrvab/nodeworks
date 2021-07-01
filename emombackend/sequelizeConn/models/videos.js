const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Video = sequelize.define(
  "videos",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    title: { type: Sequelize.STRING, allowNull: true },

    videoLink: { type: Sequelize.STRING, allowNull: true },
  },
  {
    timestamps: false,
  }
);

module.exports = Video;
