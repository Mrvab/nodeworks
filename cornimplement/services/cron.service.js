var CronJob = require("cron").CronJob;
var i = 0;
function dateScheduler(date, month, timezone) {
  month -= 1;
  var job = new CronJob(
    `1-10 23 14 ${date} ${month} *`,
    () => {
      console.log("You will see this message on ", date, "/", month + 1, i++),
        timezone;
      /// preform the op
    },
    null,
    true,
    timezone
  );
  job.start();
  // job.stop();
}
// sec ,min, hr, date, month, day of week

module.exports = { dateScheduler };
