const Sequelize = require("sequelize");
const sequelize = require("../_helpers/connection");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    username: { type: Sequelize.STRING, allowNull: true },

    fullName: { type: Sequelize.STRING, allowNull: true },

    password: { type: Sequelize.STRING, allowNull: true },

    pregnancyDueDate: { type: Sequelize.BIGINT },

    createdAt: { type: Sequelize.BIGINT },

    modifiedAt: { type: Sequelize.BIGINT },

    isDeleted: { type: Sequelize.TINYINT },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
