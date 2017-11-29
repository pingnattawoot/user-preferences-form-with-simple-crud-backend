const {
  validateSignUp, validateLogin, validateToken, validateStaticRoutes,
} = require('./validator');
const { loginUser, signUpUser, getUserData } = require('./controllers/userController');
const Language = require('./models/preferences/language');
const Currency = require('./models/preferences/currency');
const Timezone = require('./models/preferences/timezone');

const apiRoutes = (express) => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json({ message: 'api!' });
  });

  router.get('/me', validateToken, getUserData);
  router.post('/login', validateLogin, loginUser);
  router.post('/signup', validateSignUp, signUpUser);

  return router;
};

const staticRoutes = (express) => {
  const router = express.Router();
  router.get('/:type', validateStaticRoutes, async (req, res) => {
    const { type } = req.params;
    try {
      switch (type) {
        case 'languages':
          res.status(200).send({
            data: await Language.find({}),
          });
          break;
        case 'timezones':
          res.status(200).send({
            data: await Timezone.find({}),
          });
          break;
        case 'currency':
          res.status(200).send({
            data: await Currency.find({}),
          });
          break;

        default:
          break;
      }
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

  return router;
};

module.exports = {
  apiRoutes,
  staticRoutes,
};
