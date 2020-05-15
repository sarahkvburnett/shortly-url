const express = require('express');

const router = express.Router();

//@route GET /api/links
//@desc get links for user
//@access authenticated
router.get('/api/links', (req, res) => {

});

//@route PUT /api/users/signup
//@desc add link for user
//@access authenticated
router.put('/api/links', (req, res) => {

});

//@route DELETE /api/users/signup
//@desc remove link for user
//@access authenticated
router.delete('/api/links', (req, res) => {

});

module.exports = router;