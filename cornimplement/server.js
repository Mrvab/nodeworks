require("rootpath")();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api routes
app.use("/cron", require("./controllers/cron.controller"));

// start server
const port = process.env.NODE_ENV === "production" ? 8081 : 8081;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
