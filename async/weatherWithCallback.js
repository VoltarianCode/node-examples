var request = require("request");

module.exports = function(location , callback){
	
	var encodedLocation = encodeURIComponent(location);

	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9540a43055550f8a9e8b59ce2ac3c050&q=' + encodedLocation + '&units=metric';

	request({
	url: url,
	json: true
	}, function (error, response, body){

		// body is actually a JS object, it has been parsed
		// stringify body before trying to print it

		if (error){
			callback("Unable to fetch weather.");
		} else {
			//console.log(JSON.stringify(body, null, 4));
			callback(body.main.temp + " degrees Celcius in "+ body.name);
		}
	});

};