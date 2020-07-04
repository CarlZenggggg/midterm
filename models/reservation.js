// You need to define the schema for a reservation
// The fields you require are:
// associated user
// numOfOccupants (number of occupants)
// roomType (options are 'single bed', 'double bed', 'queen', 'king')
// checkIn (just date, not time)
// checkOut (just date, not time)
const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    numOfOccupants:{
        type: Number,
        required: true
    },
     roomTypes: {
            type: String,
            enum: ['SINGLE BED', 'DOUBLE BED', 'QUEEN', 'KING']
          },
    checkIn:{
        type: Date,
        required: false
    },
    checkOut:{
        type: Date,
        required: false
    }
  }, {
      timestamps: true
  });

  