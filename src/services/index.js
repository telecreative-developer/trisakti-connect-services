const users = require('./users/users.service.js');
const news = require('./news/news.service.js');
const categories = require('./categories/categories.service.js');
const faculties = require('./faculties/faculties.service.js');
const majors = require('./majors/majors.service.js');
const chats = require('./chats/chats.service.js');
const avatarUsers = require('./avatar-users/avatar-users.service.js');
const thumbnailNews = require('./thumbnail-news/thumbnail-news.service.js');
const comments = require('./comments/comments.service.js');
const careers = require('./careers/careers.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(news);
  app.configure(categories);
  app.configure(faculties);
  app.configure(majors);
  app.configure(chats);
  app.configure(avatarUsers);
  app.configure(thumbnailNews);
  app.configure(comments);
  app.configure(careers);
};
