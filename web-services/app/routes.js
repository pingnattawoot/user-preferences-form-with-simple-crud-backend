const express = require('express');
const {
  validateCreateUser,
  validateAuthenUser,
  validateToken,
  validateStaticRoutes,
  validateUpdateUser,
} = require('./validator');
const {
  authenUser,
  createUser,
  getUserData,
  updateUserData,
} = require('./controllers/userController');
const Language = require('./models/preferences/language');
const Currency = require('./models/preferences/currency');
const Timezone = require('./models/preferences/timezone');

const apiRoutes = (app) => {
  const router = express.Router();
  app.use('/api', router);

  router.get('/', (req, res) => {
    res.json({ message: 'api!' });
  });

  router.post('/auth', validateAuthenUser, authenUser);
  router.post('/user', validateCreateUser, createUser);
  router.get('/me', validateToken, getUserData);

  router.put('/user', validateToken, validateUpdateUser, updateUserData);
};

const staticRoutes = (app) => {
  const router = express.Router();
  app.use('/static', router);

  router.get('/:type', validateStaticRoutes, async (req, res) => {
    const { type } = req.params;
    try {
      switch (type) {
        case 'languages':
          res.status(200).json({
            data: await Language.find({}),
          });
          break;
        case 'timezones':
          res.status(200).json({
            data: await Timezone.find({}),
          });
          break;
        case 'currency':
          res.status(200).json({
            data: await Currency.find({}),
          });
          break;

        default:
          break;
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  });
};

module.exports = {
  apiRoutes,
  staticRoutes,
};
