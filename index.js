const express = require("express");
const app = express();
const port = 3000;

app.get("/home-page", (req, res) => {
  res.send("Hello World111!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
