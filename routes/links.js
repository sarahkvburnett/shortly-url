const express = require('express');
const passport = require('passport');
const Link = require('../models/Link');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

const isAuthenticated = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.substr(7); 
        jwt.verify(token, process.env.SECRET, (err) => {
            if (err) res.sendStatus(401);
        });
        const decoded = jwt.decode(token);
        User.findOne({_id: decoded.id, firstName: decoded.firstName})
            .then( () => next())
            .catch( err => res.send(401));
    } else res.send(401);
}

//@route POST /api/links
//@route public
router.post('/', (req, res) => {
    const newLink = new Link(req.body);
    if (req.body.userId) {
        User.find({_id: req.body.userId})
        .catch(err => res.json(err));
    } else newLink.userId = "public";
    newLink.save()
    .then(link => res.json([link]))
    .catch(err => res.json(err));
})

//@route GET /api/links
//@desc get links by userID
//@access authenticated
router.get('/:userId', isAuthenticated, (req, res) => {
    Link.find({userId: req.params.userId})
    .then(links => res.json(links))
    .catch(err => res.status(400).json(err))
});

//@route PUT /api/link
//@desc edit short link
//@access authenticated
router.put('/:id', isAuthenticated, (req, res) => {
    Link.findOne({_id: req.params.id})
        .then(link => {
            const { full, click, date, userId } = link;
            if (full !== req.body.full || click !== req.body.full || date !== req.body.date || userId !== req.body.userId ) {
                res.status(400).json({msg: 'Can only edit short link'})
            }
            Link.findOneAndUpdate({_id: req.params.id}, {_id: req.body.id})
                .then( query => res.json(query))
                .catch( err => res.send(400).json(err));
        })
        .catch(err => res.send(400).json(err));
}); 

//@route DELETE /api/links
//@desc remove link
//@access authenticated
router.delete('/:id', isAuthenticated, (req, res) => {
    Link.findOneAndDelete({_id: req.params.id})
    .then(query => res.json(query) )
    .catch( err => res.send(400).json(err))
});


module.exports = router;