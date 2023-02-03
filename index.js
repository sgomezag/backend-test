const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const config = require("./config/config");
const router = require("./routes");

const app = express();

db(config.dbUrl);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

app.listen(config.port, function () {
  console.log(`Listening on ${config.host + config.port}`);
});
