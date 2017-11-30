const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenUser = async (req, res) => {
  const inputs = req.body;
  const { username, password } = inputs;
  const user = await User.findOne({ username });

  console.log('user', user);
  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  if (user.validPassword(password)) {
    const payload = {
      user_id: user._id // eslint-disable-line
    };
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600,
    });

    return res.status(200).json({
      message: 'login successfully, use your token to access your data',
      token,
    });
  }

  return res.status(401).json({
    message: 'Unauthorized',
  });
};

const createUser = async (req, res) => {
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

const updateUserData = async (req, res) => {
  try {
    const inputs = req.body;
    const { user_id } = req.decoded;
    const user = await User.findOne({ _id: user_id });

    const newPreferencesValue = {
      localization: {
        ...user.preferences.localization,
        ...inputs.preferences.localization,
      },
      privacy: {
        ...user.preferences.privacy,
        ...inputs.preferences.privacy,
      },
      content: {
        ...user.preferences.content,
        ...inputs.preferences.content,
      },
    };
    user.preferences = newPreferencesValue;
    await user.save();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


module.exports = {
  authenUser,
  createUser,
  getUserData,
  updateUserData,
};
