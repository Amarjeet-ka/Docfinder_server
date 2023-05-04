const express = require("express");
const app = express();
const connectdatabase = require("./db/db.js"); 
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// call database 

connectdatabase;

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
