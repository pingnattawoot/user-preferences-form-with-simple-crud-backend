const Language = require('./models/preferences/language');
const Currency = require('./models/preferences/currency');
const Timezone = require('./models/preferences/timezone');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

const validateCreateUser = async (req, res, next) => {
  try {
    const inputs = req.body;
    const { username = null, password = null } = inputs;
    if (!username || !password) {
      res.status(422).send({
        messages: 'unprocessable entity, please fill username and password',
      });
      return;
    }

    const user = await User.count({ username });
    if (user > 0) {
      res.status(409).send({
        messages: 'username already exist',
      });
      return;
    }
    next();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

const validateAuthenUser = (req, res, next) => {
  const inputs = req.body;
  const { username = null, password = null } = inputs;
  if (!username || !password) {
    res.status(422).send({
      status: 422,
      messages: 'unprocessable entity, please fill username and password',
    });
    return;
  }
  next();
};

const validateToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.decoded = decoded;
      return next();
    } catch (err) {
      return res.status(403).json({
        message: err.message,
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

const validateStaticRoutes = (req, res, next) => {
  const { type } = req.params;
  if (!type || !['languages', 'timezones', 'currency'].includes(type)) {
    return res.status(404).send({
      message: 'path not found',
    });
  }
  return next();
};

const validateUpdateUser = async (req, res, next) => {
  const inputs = req.body;
  const { preferences } = inputs;
  if (!preferences) {
    return res.status(422).json({ message: 'data is invalid' });
  }

  const { localization = null, privacy = null, content = null } = preferences;
  if (!localization && !privacy && !content) {
    return res.status(422).json({ message: 'data is invalid' });
  }

  if (localization) {
    const { language = null, time_zone = null, currency = null } = localization; // eslint-disable-line
    const messages = [];
    try {
      if (language) {
        const count = await Language.count({ id: language });
        if (count === 0) {
          messages.push('localization.language is invalid');
        }
      }

      if (time_zone) { // eslint-disable-line
        const count = await Timezone.count({ id: time_zone });
        if (count === 0) {
          messages.push('localization.time_zone is invalid');
        }
      }

      if (currency) {
        const count = await Currency.count({ id: currency });
        if (count === 0) {
          messages.push('localization.currency is invalid');
        }
      }

      if (messages.length > 0) {
        return res.status(422).json({ messages });
      }
      return next();
    } catch (error) {
      // console.log(error);
      return res.status(400).json({ error });
    }
  }
  return next();
};

module.exports = {
  validateCreateUser,
  validateAuthenUser,
  validateToken,
  validateStaticRoutes,
  validateUpdateUser,
};

