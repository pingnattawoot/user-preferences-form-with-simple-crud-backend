require('dotenv').config();
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const chai = require('chai');

const { expect } = chai;
const User = require('../../../app/models/user');
const {
  authenUser,
  // createUser,
  getUserData,
  updateUserData,
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
    it('should return status 200 and token when authen success', async () => {
      req = {
        body: { username: 'ping1', password: '12345' },
      };

      const expectedUser = {
        _id: '5a20004d2ebae102988cbef7',
        updated_at: '2017-11-30T13:31:19.333Z',
        created_at: '2017-11-30T12:57:49.740Z',
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
      expect(res.status.withArgs(401).calledOnce).to.equal(true);
      expect(res.json.withArgs(expectedResJson).calledOnce).to.equal(true);
    });

    it('should return status 401 when password is wrong', async () => {
      req = {
        body: { username: 'ping', password: 'wrong_password' },
      };

      const expectedUser = {
        _id: '5a20004d2ebae102988cbef7',
        updated_at: '2017-11-30T13:31:19.333Z',
        created_at: '2017-11-30T12:57:49.740Z',
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
        validPassword: () => false,
      };

      const expectedResJson = {
        message: 'Unauthorized',
      };

      mockUserModel.expects('findOne')
        .withArgs({ username: req.body.username })
        .resolves(expectedUser);

      await authenUser(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(401).calledOnce).to.equal(true);
      expect(res.json.withArgs(expectedResJson).calledOnce).to.equal(true);
    });
  });

  describe('createUser', () => {
    it.skip('should create user successfully', async () => {
      req = {
        body: { username: 'ping', password: '12345' },
      };
    });
  });

  describe('getUserData', () => {
    it('should get user data successfully', async () => {
      req = {
        decoded: { user_id: '5a219e39b8703b017490b382' },
      };

      const expectedUser = {
        updated_at: '2017-12-01T18:23:53.910Z',
        created_at: '2017-12-01T18:23:53.910Z',
        username: 'ping',
        _id: '5a219e39b8703b017490b382',
        preferences: {
          content: {
            category_lists: 'enable',
          },
          privacy: {
            messages: 'people_you_follow',
            profile_visibility: 'everyone',
          },
          localization: {
            currency: null,
            time_zone: null,
            language: null,
          },
        },
      };

      mockUserModel.expects('findOne')
        .withArgs({ _id: req.decoded.user_id })
        .resolves(expectedUser);

      await getUserData(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(200).calledOnce).to.equal(true);
      expect(res.json.withArgs({ data: expectedUser }).calledOnce).to.equal(true);
    });

    it('should fail if an error occors', async () => {
      req = {
        decoded: { user_id: '5a219e39b8703b017490b382' },
      };


      mockUserModel.expects('findOne')
        .withArgs({ _id: req.decoded.user_id })
        .throws('error');

      await getUserData(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(500).calledOnce).to.equal(true);
    });
  });

  describe('updateUserData', () => {
    it('sould update user succesfully', async () => {
      req = {
        decoded: { user_id: '5a219e39b8703b017490b382' },
        body: {
          preferences: {
            // change localization
            content: {
              category_lists: 'enable',
            },
            privacy: {
              messages: 'people_you_follow',
              profile_visibility: 'everyone',
            },
            localization: {
              currency: 'THB',
              time_zone: '+07:00',
              language: 'th',
            },
          },
        },
      };

      const expectedUserFromDatabase = {
        updated_at: '2017-12-01T18:23:53.910Z',
        created_at: '2017-12-01T18:23:53.910Z',
        username: 'ping',
        _id: '5a219e39b8703b017490b382',
        preferences: {
          content: {
            category_lists: 'enable',
          },
          privacy: {
            messages: 'people_you_follow',
            profile_visibility: 'everyone',
          },
          localization: {
            currency: 'USD',
            time_zone: '+00:00',
            language: 'en',
          },
        },
        save: () => { },
      };

      const expectedUpdateUser = {
        ...expectedUserFromDatabase,
        preferences: {
          ...expectedUserFromDatabase.preferences,
          localization: {
            currency: 'THB',
            time_zone: '+07:00',
            language: 'th',
          },
        },
      };

      mockUserModel.expects('findOne')
        .withArgs({ _id: req.decoded.user_id })
        .resolves(expectedUserFromDatabase);

      await updateUserData(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(200).calledOnce).to.equal(true);
      expect(res.json.withArgs({ data: expectedUpdateUser }).calledOnce).to.equal(true);
    });

    it('should fail if an error occors', async () => {
      req = {
        decoded: { user_id: 'yyyy' },
        body: { xxx: 'xxx' },
      };

      mockUserModel.expects('findOne')
        .withArgs({ _id: req.decoded.user_id })
        .throws('error');

      await updateUserData(req, res);
      mockUserModel.verify();
      expect(res.status.withArgs(500).calledOnce).to.equal(true);
    });
  });
});
