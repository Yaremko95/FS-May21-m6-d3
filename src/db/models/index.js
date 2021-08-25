import Author from "./Author.js";
import Blog from "./Blog.js";
import sequelize from "../index.js";

// Author.beforeCreate(async (user) => {
//     const hashedPassword = await hashPassword(user.password);
//     user.password = hashedPassword;
//   });

Blog.belongsTo(Author);
Author.hasMany(Blog);

export default { Author, sequelize, Blog };
