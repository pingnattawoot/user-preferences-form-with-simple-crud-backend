const jwt = require('jsonwebtoken');
const User = require('../models/user');

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
      user_id: user._id // eslint-disable-line
    };
    const token = jwt.sign(payload, process.env.SECRET, {
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

const getUserData = async (req, res) => {
  const decodedToken = req.decoded;
  const user = await User.findOne({ _id: decodedToken.user_id });
  res.json(user);
};


module.exports = {
  loginUser,
  signUpUser,
  getUserData,
};
