const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: [true, 'shortId is required'],
    },
    redirectUrl: {
      type: String,
      required: [true, 'redirectUrl is required'],
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model('urls', urlSchema);
module.exports = URL;
