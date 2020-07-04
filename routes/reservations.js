const { index, show, new: _new, edit, create, update, delete: _delete } = require('../controllers/ReservationsController');

function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('danger', 'You need to login first.');
    return res.redirect('/login');
  }
  next();
}

module.exports = router => {
  // put your routes here
  router.get('/reservations', index);
  router.get('/reservations/new', _new);
  router.post('/reservations', create);
  router.post('/reservations/update', update);
  router.post('/reservations/delete', _delete);
  router.get('/reservations/:id/edit', edit);
  router.get('/reservations/:id', show);
};