const Sequelize = require("sequelize");
const sequelize = require("../_helpers/connection");

const Lookup = sequelize.define(
  "lookup",
  {
    lookupId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    displayValue: { type: Sequelize.STRING, allowNull: true },

    customStringValue: { type: Sequelize.STRING, allowNull: true },

    lookupTypeId: { type: Sequelize.INTEGER },
  },
  {
    tableName: "lookup",
    timestamps: false,
  }
);

module.exports = Lookup;
