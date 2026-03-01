const mongoose = require('mongoose');

const FAIR_START = new Date('2022-05-10T00:00:00.000Z');
const FAIR_END = new Date('2022-05-13T23:59:59.999Z');

const InterviewSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return value >= FAIR_START && value <= FAIR_END;
      },
      message: 'Interview date must be between May 10 and May 13, 2022'
    }
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Interview', InterviewSchema);
