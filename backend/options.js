module.exports.options = {
  origin: [
    'https://api.backend.anzhelf-mesto.nomoredomains.monster',
    'http://api.backend.anzhelf-mesto.nomoredomains.monster',
    'https://backend.anzhelf-mesto.nomoredomains.monster',
    'http://backend.anzhelf-mesto.nomoredomains.monster',
    'http://localhost:3001',
    'http://localhost:3000',
  ],
  methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};