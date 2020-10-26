const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/chatterbox";

const User = require('./models/User');
const Level = require('./models/Level');


class Controller {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect(MONGO_URI, {
                useNewUrlParser: true
            })
            console.log("connect to DB");
        } catch(err) {
            console.error(err);
        }
    }

    //queries
    addUser(res, data) {

        // if (User.findOne( data.email ))
        // return res.status(400).send({ error: 'User already exists!'});

        User.create(data, (err, newUser) => {

            // if (User.findOne( data.email ))
            // return res.status(400).send({ error: 'User already exists!'});

            if(err) throw err;
            res.json({
                status: 200,
                message: 'Created',
                user: newUser
            })
        });
    }

    login(res, data) {
        User.findOne({
            $and: [
                {email: data.email},
                {password: data.password}
            ]
        }, (err, user) => {
            if(err) throw err;
            res.json({
                status: 200,
                message: 'Ok',
                user
            });
        });
    }

    updateUser(res, id, data) {
        User.updateOne( {
            _id: id
        }, data, (err, updateUser) => {
            if(err) throw err;
            res.json({
                status: 200,
                message: 'updated',
                user: updateUser
            })
        })
    }

    getUser(res, id) {
        User.findOne({
            _id: id
        }, (err, user) => {
            if(err) throw err;
            res.json({
                status: 200,
                message: 'ok',
                user
            })
        })
    }

    getUsers(req, res) {
        User.find({}, function(err, Users){
            if (err) return done(err);

            if (Users) {
                res.json({
                    status: 200,
                    message: 'ok',
                    Users
                });
            }
        });
    }

    deleteUser(res, id) {
        User.deleteOne({
            _id: id
        }, (err) => {
            if(err) throw err;
            res.json({
                status: 200,
                message: "deleted!"
            })
        })
    }
}

exports.db = new Controller();