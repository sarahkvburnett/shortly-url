const mongoose = require("mongoose");
const shortid = require("shortid");

const linkSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
		default: shortid.generate,
		isNew: true,
	},
	userId: {
		type: String,
		required: true,
	},
	full: {
		type: String,
		required: true,
	},
	short: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	click: {
		type: Array,
		required: true,
		default: [],
	},
});

module.exports = Link = mongoose.model("Link", linkSchema);
