const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Resource = sequelize.define(
  "resource",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    resourceTitle: { type: Sequelize.STRING, allowNull: true },

    resourceLink: { type: Sequelize.STRING, allowNull: true },

    typeId: { type: Sequelize.INTEGER },
  },
  {
    timestamps: false,
  }
);

module.exports = Resource;
