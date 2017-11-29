const jwt = require('jsonwebtoken');
const User = require('./models/user');
const { validateSignUp, validateLogin, validateToken } = require('./validator');

const apiRoutes = (app, express) => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json({ message: 'api!' });
  });

  const loginUser = async (req, res) => {
    const inputs = req.body;
    const { username, password } = inputs;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send({
        status: 401,
        message: 'Unauthorized',
      });
    }

    if (user.validPassword(password)) {
      const payload = {
        userid: user._id // eslint-disable-line
      };
      const token = jwt.sign(payload, app.get('superSecret'), {
        expiresIn: 60,
      });

      return res.status(200).json({
        status: 200,
        message: 'login successfully, use your token to access your data',
        token,
      });
    }

    return res.status(401).send({
      status: 401,
      message: 'Unauthorized',
    });
  };

  const signUpUser = async (req, res) => {
    const inputs = req.body;
    const { username, password } = inputs;

    const newUser = new User({ username });
    newUser.password = newUser.generateHash(password);

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  };

  router.get('/users', validateToken, async (req, res) => {
    const users = await User.find({});
    res.json(users);
  });

  router.post('/signup', validateSignUp, signUpUser);
  router.post('/login', validateLogin, loginUser);

  return router;
};

module.exports = {
  apiRoutes,
};
