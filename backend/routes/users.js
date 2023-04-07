const users = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateUser, updateAvatar, getMe,
} = require('../controllers/users');
const { url, id } = require('../utils/regularExpressions');

users.get('/', getUsers); // возвращает всех пользователей
users.get('/me', getMe); // информация о текущщем пользователе
users.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);// обновляет профиль

users.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(url),
  }),
}), updateAvatar);// обновляет аватар

users.get('/:usersId', celebrate({
  body: Joi.object().keys({
    id: Joi.string().pattern(id).required().length(24),
  }),
}), getUser); // возвращает пользователя по _id
module.exports = users;
