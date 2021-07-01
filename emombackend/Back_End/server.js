require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./Controllers/users.controller"));
app.use("/notes", require("./Controllers/notes.controller"));
app.use("/appData", require("./Controllers/appData.controller"));

app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? 3004 : 3004;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
