const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

const updateClicks = (short, click) => {

}

//@route GET /api/links
//@desc open link
//@access public
router.get('/:short', (req, res) => {
    Link.findOne({short: req.params.short})
    .then( link  => {
        let { click } = link;
        click.push({date: Date.now()});
        link.save({click})
        .then( ({full}) => res.redirect(full))
        .catch( err => res.status(500).json(err))
    })
    .catch(err => res.status(404).json(err))
});

module.exports = router;