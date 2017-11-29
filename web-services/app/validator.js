const jwt = require('jsonwebtoken');
const User = require('./models/user');

const validateSignUp = async (req, res, next) => {
  try {
    const inputs = req.body;
    const { username = null, password = null } = inputs;
    if (!username || !password) {
      res.status(422).send({
        status: 422,
        messages: 'unprocessable entity, please fill username and password',
      });
      return;
    }

    const user = await User.count({ username });
    if (user > 0) {
      res.status(409).send({
        status: 409,
        messages: 'username already exist',
      });
      return;
    }
    next();
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
};

const validateLogin = (req, res, next) => {
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
        status: 403,
        message: err.message,
      });
    }
  } else {
    return res.status(403).send({
      status: 403,
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

module.exports = {
  validateSignUp,
  validateLogin,
  validateToken,
  validateStaticRoutes,
};

