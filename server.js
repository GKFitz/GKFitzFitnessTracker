// Start the server
const express = require("express");
const logger = require("morgan");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);
app.use(htmlRoutes);

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  