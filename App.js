const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
require("dotenv").config();

app.use("/api", router);
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT, () => {
  console.log("Listen to PORT: " + process.env.PORT);
});
