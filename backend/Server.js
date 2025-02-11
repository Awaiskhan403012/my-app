const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const usersModel = require("./models/users");


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    usersModel.findOne({ name: name })
        .then(user => {
            if (user) {
                return res.json({ message: 'User already exists' });
            } else {
                usersModel.create({ name, email, password })
                    .then(newUser => {
                        return res.json({ message: 'User created successfully', user: newUser });
                    })
                    .catch(err => {
                        return res.status(500).json({ error: 'Error creating user', details: err });
                    });
            }
        })
        .catch(err => {
            return res.status(500).json({ error: 'Error checking user', details: err });
        });
});
app.post('/login',(req,res) => {
    const {name, password} = req.body;
    usersModel.findOne({name: name})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is inncorect")
            }
        }else{
            res.json("no records existed")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running");
})
