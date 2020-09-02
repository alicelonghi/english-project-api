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
        User.create(data, (err, newUser) => {
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