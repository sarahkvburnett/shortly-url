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
    newLink.short = newLink._id;
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

//@route GET /api/links
// get single link by id
//@access authenticated
router.get('/link/:id', isAuthenticated, (req, res) => {
    Link.findById(req.params.id)
    .then(link => res.json(link))
    .catch(err => res.status(400).json(err))
});


//@route PUT /api/link
//@desc edit short link
//@access authenticated
router.put('/:id', isAuthenticated, (req, res) => {
    Link.findById(req.params.id)
        .then(link => {
            const { full, userId, short, _id } = link;
            if (full !== req.body.full || userId !== req.body.userId ) { // add back in date validation was failing
                res.status(400).json({msg: 'Can only edit short link'})
            }
            if ( short === req.body.short) res.status(400).json({msg: 'Short link is the same'})
            Link.findByIdAndUpdate(_id, {short: req.body.short}, {new: true, useFindAndModify: false})
                .then( query => res.json(query))
                .catch( err => res.status(400).json(err));
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({"msg": "find fail"});
        })
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