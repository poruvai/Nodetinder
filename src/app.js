const express = require("express");
const app = express();



app.use("/test", (req, res) => {
  res.send("Hello slash from the server");
});
app.use("/",(req, res) => {
  res.send("Hell from the server");
});
app.listen(3001, () => {
  console.log("server is successfully running");
});
