const express = require("express");
const moment = require("moment");
const router = express.Router();
const cronService = require("../services/cron.service");

router.get("/:date/:month", startCornJobe);

module.exports = router;

function startCornJobe(req, res) {
  const timezoneoffset = new Date().getTimezoneOffset();
  var timezone = moment.tz.guess(timezoneoffset);
  cronService.dateScheduler(req.params.date, req.params.month, timezone);

  res.json({
    message: `cron scheduled`,
    date: `${req.params.date}/ ${req.params.month}`,
    timezone,
  });
}
