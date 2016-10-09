var request = require("request");
var url = "http://ipinfo.io";

module.exports = function (){
	return new Promise (function (resolve, reject){
		request({
			url: url,
			json: true
			}, function(error, res, body) {
				if (error){
					reject("Failed to ascertain the location");
				} else {
					resolve(body);
				}
		});

	});
	
};
