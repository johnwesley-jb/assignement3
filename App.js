const express = require("express");
const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log("Listen to PORT: " + server.address.PORT);
});
