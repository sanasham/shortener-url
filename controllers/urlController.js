const shortId = require('shortid');
const URL = require('../models/urls.js');
async function handleGenerateShortUrl(req, res) {
  try {
    const bodyurl = req.body;
    console.log(bodyurl.url);

    const shortIdValue = shortId();

    let customObj = {
      shortId: shortIdValue,
      redirectUrl: bodyurl.url,
      visitHistory: [],
    };
    console.log('url', URL);
    console.log('abc', customObj);
    await URL.create(customObj);

    return res.status(201).json({ id: shortIdValue });
  } catch (error) {
    console.log(`custom errro ${error.message}`);
  }
}

async function getShortIdValue(req, res) {
  console.log('inside getShortIdValue');
  console.log('short id value this', req.params);

  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId: shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    console.log('entry', entry.redirectUrl);
    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.log(`custom errro ${error.message}`);
  }
}

module.exports = { handleGenerateShortUrl, getShortIdValue };
