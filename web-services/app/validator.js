const jwt = require('jsonwebtoken');
const User = require('./models/user');

module.exports = {
  validateSignUp: async (req, res, next) => {
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
  },
  validateLogin: (req, res, next) => {
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
  },
  validateToken: (req, res, next) => { // eslint-disable-line
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      console.log('secret : ', process.env.SECRET);
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            status: 403,
            message: err.message,
          });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).send({
        status: 403,
        message: 'No token provided.',
      });
    }
  },
};

