require('dotenv').config()
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const model = require("../model/user")
const router = express.Router()
const jwtToken = process.env.JWT_TOKEN
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
    .post("/signin", (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json(422).json({ error: "Please fill the details" })
        }
        User.findOne({ email: email })
            .then(savedUser => {
                if (!savedUser) {
                    return res.json(422).json({ error: "User doesn't exist" })
                }
                bcrypt.compare(password, savedUser.password)
                    .then(doMatch => {
                        if (doMatch) {
                            const token = jwt.sign({ _id: savedUser._id }, jwtToken)
                            res.json({ token })
                        } else {
                            return res.status(422).json({ error: "Invalid details" })
                        }
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwY2IwMTczYjIwNDBlMDQ2MTk1NWIiLCJpYXQiOjE2ODYxNjQwMDl9.qZkPaX_vIGz_A8Y3uDovMPxqcNNgt28g7CwSnfMYtzU