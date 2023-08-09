const mongoose = require('mongoose');
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add the contact name'],
    },
    email: {
      type: String,
      required: [true, 'please add the contact email address'],
    },
    password: {
      type: String,
      required: [true, 'please add the contact password'],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

module.exports = mongoose.model('Contact', contactSchema);
