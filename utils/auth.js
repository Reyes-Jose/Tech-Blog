const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect to the login route
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
