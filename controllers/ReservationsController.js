// You need to complete this controller with the required 7 actions
const viewPath = ('reservations');
const Reservation = require('../models/reservation');
const reservations = require('../routes/reservations');

exports.index = async (req, res) => {};
// const reservation = await Reservation.findById(req.params.id);


exports.show = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  res.render(`${viewPath}/show`, {
    pageTitle: reservation.name,
    reservation: reservation
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Reservation'
  });
};

exports.create = async (req, res) => {

try{
  const reservation = await Reservation.create(req.body);
  res.redirect(`/reservations/${reservation.id}`);
} catch (err) {
  res.send(err);
}
};

exports.edit = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
    
        res.render(`${viewPath}/edit`, {
          pageTitle: '',
          formData: reservation
        })
      } catch (error) {
        req.flash('danger', 'There was an issue fetching the reservation list');
        res.redirect('/');
      }
};

exports.update = async (req, res) => {
    try {
        await Reservation.validate(req.body);
        await Reservation.updateOne(req.body);
    
        req.flash('success', 'This reservation was updated successfully');
        res.redirect(`/reservations/${req.body.id}`);
      } catch (error) {
        req.flash('danger', 'There was an issue fetching the reservation list');
        res.redirect('/');
      }
};

exports.delete = async (req, res) => {};