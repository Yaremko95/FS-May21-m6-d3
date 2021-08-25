import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Blog = sequelize.define("blog", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  readTimeValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  readTimeUnit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Blog;
