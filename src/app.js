const { app } = require('./bin/routes');


app.listen(3000, () => {
  console.log('\n ---- Chatterbox api start ---- \n ---- Server on port 3000 ---- \n');
});

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// //req => dados da requisição
// // res => objeto pra enviar resposta
// app.get("/", (req, res) => {
//   res.send("ok");
// });

// //router 

// require("./controllers/authController")(app);
// require("./controllers/projectController")(app);
// require("./controllers/levelController")(app);

// app.listen(3000);
