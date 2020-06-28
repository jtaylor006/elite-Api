module.exports = function attachAuthenticationStatus(req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
};
