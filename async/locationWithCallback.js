var request = require("request");
var url = "http://ipinfo.io";

module.exports = function (callback){
	request({
		url: url,
		json: true
	}, function(error, res, body) {
		if (error){
			callback("Failed to ascertain the location");
		} else {
			callback(body);
		}
	});
};
