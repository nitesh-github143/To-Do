const express = require("express")
const bcrypt = require("bcrypt")
const model = require("../model/user")
const router = express.Router()

const User = model.User

router
    .post("/signup", (req, res) => {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(422).json({ error: "Please fill all the details" })
        }
        User.findOne({ email: email })
            .then(savedUser => {
                if (savedUser) {
                    return res.status(422).json({ message: "Email already exists" })
                }
                bcrypt.hash(password, 10)
                    .then(hashedPassword => {
                        const user = new User({
                            name,
                            email,
                            password: hashedPassword
                        })
                        user.save()
                            .then(user => {
                                res.status(200).json({ message: "user created" })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })

exports.router = router