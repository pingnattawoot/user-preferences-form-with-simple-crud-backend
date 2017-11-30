require('dotenv').config();
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');
const User = require('../../../app/models/user');
const {
  authenUser,
  // createUser,
  // getUserData,
  // updateUserData,
} = require('../../../app/controllers/userController');

describe('userController ', () => {
  let mockUserModel;

  let req;
  let res;
  // let clock;
  beforeEach(() => {
    mockUserModel = sinon.mock(User);
    req = {};
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    // clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    mockUserModel.restore();
  });

  describe('authenUser', () => {
    const expectedUser = {
      _id: '5a20004d2ebae102988cbef7',
      updated_at: '2017-11-30T13:31:19.333Z',
      created_at: '2017-11-30T12:57:49.740Z',
      password: '$2a$08$Xhl0ZiGmOHWddSLN821WFOyGC8MxUrEhTvTrV/8sVjHcBXNZg2IoW',
      username: 'ping1',
      preferences: {
        content: {
          category_lists: 'enable',
        },
        privacy: {
          messages: 'no_one',
          profile_visibility: 'everyone',
        },
        localization: {
          currency: 'THB',
          time_zone: '+07:00',
          language: 'en',
        },
      },
      validPassword: () => true,
    };

    it('should return status 200 and token when authen success', async () => {
      req = {
        body: { username: 'ping', password: '12345' },
      };

      const payload = {
        user_id: expectedUser._id // eslint-disable-line
      };

      const expectedToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: 3600,
      });

      const expectedResJson = {
        message: 'login successfully, use your token to access your data',
        token: expectedToken,
      };

      mockUserModel.expects('findOne')
        .withArgs({ username: req.body.username })
        .resolves(expectedUser);

      await authenUser(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(200).calledOnce).to.equal(true);
      expect(res.json.withArgs(expectedResJson).calledOnce).to.equal(true);
    });

    it('should return status 401 when user not found', async () => {
      req = {
        body: { username: 'xxxxx', password: '12345' },
      };

      const expectedResJson = {
        message: 'Unauthorized',
      };

      mockUserModel.expects('findOne')
        .withArgs({ username: req.body.username })
        .resolves(null);

      await authenUser(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(200).calledOnce).to.equal(true);
      expect(res.json.withArgs(expectedResJson).calledOnce).to.equal(true);
    });
  });
});
