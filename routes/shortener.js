const express = require('express');
const Link = require('../models/Link');

const router = express.Router();

router.get('/:id', (req, res) => {
    Link.findById(req.params.id)
    .then(({fullUrl}) => res.redirect(fullUrl))
    .catch(err => console.log(err))
})

module.exports = router;