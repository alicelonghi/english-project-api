const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//req => dados da requisição
// res => objeto pra enviar resposta
app.get("/", (req, res) => {
  res.send("ok");
});

require("./controllers/authController")(app);

app.listen(3000);
