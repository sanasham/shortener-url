const express = require('express');
const {
  handleGenerateShortUrl,
  getShortIdValue,
} = require('../controllers/urlController.js');
const router = express.Router({ mergeParams: true });

router.post('/', handleGenerateShortUrl).get('/', getShortIdValue);

module.exports = router;
