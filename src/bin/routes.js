const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// settings
app.use(bodyParser.json());

const {db} = require('./db');

//routes 
app.post('/api/users', (req, res) => {
    let data = req.body; 
    db.addUser(res, data);
});

app.post('/api/login', (req, res) => {
    let data = req.body;
    db.login(res, data);
});

app.put('/api/users/:id', (req, res) => {
    let {id} = req.params;
    let data = req.body;
    db.updateUser(res, id, data);
});

app.get('/api/user/:id', (req, res) => {
    let {id} = req.params;
    db.getUser(res, id);
})

app.delete('/api/user/:id', (req, res) => {
    let {id} = req.params;
    db.deleteUser(res, id);
})


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

exports.app = app;