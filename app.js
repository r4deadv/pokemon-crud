const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(bodyParser.json())
  .use(cors());

app.get("/", (req, res) => {
  res.json("Hello, App! 👋 ");
});

require("./src/routes/pokemon")(app);

app.use(({ res }) => {
  const message = "Resource not found";
  res.status(404).json({ message });
});

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));
