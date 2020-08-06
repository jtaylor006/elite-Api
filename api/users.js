const userServices = require("../services/usersServices.js");

exports.createUsers = (req, res, next) => {
  try {
    const userInfo = req.body;
    return userServices.createUsers(res, userInfo);
  } catch (error) {
    return next(error);
  }
};

exports.deleteUser = (req, res, next) => {
  try {
    const { id } = req.params;
    return userServices.deleteUser(res, id);
  } catch (error) {
    return next(error);
  }
};

exports.editUser = (req, res, next) => {
  try {
    const id = req.params.userId;
    const info = req.body;
    return userServices.editUser(res, id, info);
  } catch (error) {
    return next(error);
  }
};

exports.getUsersByStories = (req, res, next) => {
  try {
    const ids = req.body;
    return userServices.getUsersByStories(res, ids);
  } catch (err) {
    return next(err);
  }
};

exports.getUserById = (req, res, next) => {
  try {
    const { id } = req.params;
    return userServices.getUserById(res, id);
  } catch (err) {
    return next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const reqUser = req.user;

    if (reqUser.emailFound) {
      if (!reqUser.emailFound) {
        return res.status(400).send({ message: "incorrect credentials" });
      }
    }

    if (!reqUser.password) {
      return res.status(400).send({ message: "incorrect credentials" });
    }

    const { token, user } = await userServices.signIn(reqUser);
    user.password = undefined;
    return res.status(200).send({
      token,
      user,
    });
  } catch (err) {
    return next(err);
  }
};

exports.check = async (req, res, next) => {
  try {
    const { user } = req;

    if (user) {
      return res.status(200).send({ message: "found user", user });
    }
    return res.status(401).send({ message: "Unauthorized" });
  } catch (err) {
    return next(err);
  }
};

exports.logout = (req, res, next) => {};
