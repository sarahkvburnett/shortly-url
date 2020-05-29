const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

//@route POST /api/users/signup
//@desc register a user
//@access public
router.post('/signup', [
    check('firstName').isLength({min: 1}),
    check('lastName').isLength({min: 1}),
    check('email').isEmail(),
    check('password').isLength({min: 6}),
    check('password2').isLength({min: 6})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    if (req.body.password !== req.body.password2) return res.status(400).json({error: "Passwords do not match"})
    User.findOne({email: req.body.email})
    .then(user => {
        if (user) return res.status(400).json({error: "Email already exists"});
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) throw error;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(error => console.log(error))
            })
        })
    })
});

//id: 5eb84d1c4df52c601c221b19
//token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTYXJhaCIsImlkIjoiNWViODRkMWM0ZGY1MmM2MDFjMjIxYjE5IiwiaWF0IjoxNTkwNzY3NjY4LCJleHAiOjE1OTMzNTk2Njh9.AVAWjWkcLgrJQlDDFRmMw7ATKt09eRmTpfNYWi3jDoA

//@route POST /api/users/login
//@desc register a user
//@access public
router.post('/login', [
    check('email').isEmail(),
    check('password').isLength({min: 6})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    User.findOne({email: req.body.email})
    .then(user => {
        bcrypt.compare(req.body.password, user.password)
        .then((isMatch) => {
                if (isMatch) {
                const { firstName, id } = user;
                const token = jwt.sign({firstName, id}, process.env.SECRET, {expiresIn: "30d"});
                res.json({id: user.id, token: 'Bearer ' + token});
            } else return res.status(400).json({error: "Password does not match"})
        })
    })
    .catch( (err) => res.status(404).json({error: "Email not found"}))
})

module.exports = router;