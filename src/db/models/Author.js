import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Author = sequelize.define("author", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
      msg: "Invalid url",
    },
  },
});

export default Author;
