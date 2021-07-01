const Sequelize = require("sequelize");
const sequelize = require("../_helpers/connection");

const LookupType = sequelize.define(
  "lookuptype",
  {
    lookupTypeId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    lookupType: { type: Sequelize.STRING, allowNull: true },

    isDeleted: { type: Sequelize.TINYINT },
  },
  {
    timestamps: false,
  }
);

module.exports = LookupType;
