// app.js включает основную логику сервера,
// запуск и подключение к базе данных;
// подключаем пакеты
const express = require('express');
const mongoose = require('mongoose');
const patch = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { celebrate, Joi, errors } = require('celebrate');
const { url } = require('./utils/regularExpressions');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const users = require('./routes/users');
const cards = require('./routes/cards');
// const router = require('./routes');

const { createUser, login } = require('./controllers/users');
const errorHandler = require('./middlewares/errorHandler');
const NotFoundError = require('./errors/NotFoundError');

const PORT = 3001;

// создали сервер
const app = express();

//статика
app.use(express.static(patch.join(__dirname + 'frontend')));

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(requestLogger);

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   next();
// });


app.post('/sign-up', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(url),
    about: Joi.string().min(2).max(30),
  }),
}), createUser); // создаёт пользователя

app.post('/sign-in', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login); // авторизирует пользователя

app.use(auth);

app.use('/users', users);
app.use('/cards', cards);

// app.use('/', router);

app.use('*', (req, res, next) => next(new NotFoundError('Страница не существует.')));

//логирование
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());

// обработчик ошибки
app.use(errorHandler);

// включаем валидацию базы
mongoose.set('runValidators', true);
// соединяемся с базой
mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
}, () => {
  console.log('Connected to MongoDb');

  // Слушаем порт, подключаем апи
  app.listen(PORT, (error) => (error ? console.error(error) : console.log(`App listening on port ${PORT}`)));
});
