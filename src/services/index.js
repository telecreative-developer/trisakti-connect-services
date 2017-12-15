const users = require('./users/users.service.js');
const news = require('./news/news.service.js');
const categories = require('./categories/categories.service.js');
const faculties = require('./faculties/faculties.service.js');
const majors = require('./majors/majors.service.js');
const avatarUsers = require('./avatar-users/avatar-users.service.js');
const thumbnailNews = require('./thumbnail-news/thumbnail-news.service.js');
const comments = require('./comments/comments.service.js');
const careers = require('./careers/careers.service.js');
const friends = require('./friends/friends.service.js');
const friendsrequest = require('./friendsrequest/friendsrequest.service.js');
const chats = require('./chats/chats.service.js');
const polls = require('./polls/polls.service.js');
const pollsanswers = require('./pollsanswers/pollsanswers.service.js');
const pollschoices = require('./pollschoices/pollschoices.service.js');

const reports = require('./reports/reports.service.js');

const chatsImages = require('./chats-images/chats-images.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(news);
  app.configure(categories);
  app.configure(faculties);
  app.configure(majors);
  app.configure(avatarUsers);
  app.configure(thumbnailNews);
  app.configure(comments);
  app.configure(careers);
  app.configure(friends);
  app.configure(friendsrequest);
  app.configure(chats);
  app.configure(polls);
  app.configure(pollsanswers);
  app.configure(pollschoices);
  app.configure(reports);
  app.configure(chatsImages);
};
