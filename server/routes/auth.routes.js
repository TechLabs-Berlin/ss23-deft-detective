const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require('../models/User.model')
const jwt = require("jsonwebtoken")



router.post("/signup", async (request, response) => {
  try {
    const existingUser = await User.findOne({ email: request.body.email })
    if (existingUser) {
      return response.status(400).send({ message: "User already exists with this email" })
    }

    const hashedPassword = await bcrypt.hash(request.body.password, 10)
    const user = await User.create({
      email: request.body.email,
      password: hashedPassword,
    })

    response.status(201).send({
      message: "User Created Successfully",
      user,
    })
  } catch (error) {
    console.error("Error creating user", error)
    response.status(500).send({
      message: "Error creating user",
    })
  }
})



router.post("/login", (request, response) => {
  User.findOne({ email: request.body.email })
    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            })
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          )
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          })
        })
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          })
        })
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      })
    })
})

module.exports = router;