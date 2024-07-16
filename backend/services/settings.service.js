const Setting = require('../models/settings.model');

const get = async (key) => {
	return Setting.findOne({key: key})
};

const set = async (request) => {
	  return Setting.insert({key: request?.key, value: request?.value});
};

module.exports = { get, set };