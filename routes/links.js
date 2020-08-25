require("dotenv").config();
const express = require("express");
const Link = require("../models/Link");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const isAuthenticated = (req, res, next) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization.substr(7);
		jwt.verify(token, process.env.SECRET, (err) => {
			if (err) res.sendStatus(401);
		});
		const decoded = jwt.decode(token);
		User.findOne({ _id: decoded.id, firstName: decoded.firstName })
			.then(() => next())
			.catch((err) => res.send(401));
	} else res.send(401);
};

const validateLink = (req, res, next) => {
	const errors = validationResult(req.body);
	if (!errors.isEmpty()) res.status(400);
	else next();
};

//TODO: equivalent check of date and time and click
const compareLink = (req, res, next) => {
	Link.findById(req.params.id)
		.then((link) => {
			let { full, userId, short, _id } = link;
			if (short === req.body.short)
				return res.status(400).json({ msg: "Short link is the same" });
			else if (
				_id !== req.params.id ||
				userId !== req.body.userId ||
				full !== req.body.full
			)
				return res.status(400).json({ msg: "Link details do not match" });
			else next();
		})
		.catch((err) => res.status(404).json({ msg: "Link not found", err }));
};

//@route POST /api/links
//@route public
router.post(
	"/",
	[check("full").notEmpty().isURL()],
	validateLink,
	(req, res) => {
		const newLink = new Link(req.body);
		if (req.body.userId) {
			User.find({ _id: req.body.userId }).catch((err) =>
				res.status(404).json({ msg: "User not found", err })
			);
		} else newLink.userId = "public";
		newLink.short = newLink._id;
		newLink
			.save()
			.then((link) => res.json([link]))
			.catch((err) => res.status(500).json({ msg: "Link not saved", err }));
	}
);

//@route GET /api/links
//@desc get links by userID
//@access authenticated
router.get("/:userId", isAuthenticated, (req, res) => {
	Link.find({ userId: req.params.userId })
		.then((links) => res.json(links))
		.catch((err) => res.status(404).json({ msg: "Links not found" }));
});

//@route GET /api/links
// get single link by id
//@access authenticated
router.get("/link/:id", isAuthenticated, (req, res) => {
	Link.findById(req.params.id)
		.then((link) => res.json(link))
		.catch((err) => res.status(404).json({ msg: "Link not found" }));
});

//@route PUT /api/link
//@desc edit short link
//@access authenticated
router.put(
	"/:id",
	isAuthenticated,
	[
		check("_id").notEmpty(),
		check("userId").notEmpty(),
		check("full").notEmpty(),
		check("short").notEmpty(),
		check("date").isISO8601(),
		check("click").notEmpty().isArray(),
	],
	validateLink,
	compareLink,
	(req, res) => {
		Link.findByIdAndUpdate(
			req.params.id,
			{ short: req.body.short },
			{ new: true, runValidators: true, useFindAndModify: false }
		)
			.then((link) => res.json(link))
			.catch((err) => res.status(500).json({ msg: "Link not updated", err }));
	}
);

//@route DELETE /api/links
//@desc remove link
//@access authenticated
router.delete("/:id", isAuthenticated, (req, res) => {
	//checking userId to ensure user owns link they deleting
	Link.findOneAndDelete({ _id: req.params.id, userId: req.body.userId })
		.then((query) => res.json(query))
		.catch((err) => res.send(404).json({ msg: "Link not found", err }));
});

module.exports = router;
