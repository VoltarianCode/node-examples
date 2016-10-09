
var weather = require('./weatherWithCallback.js');
var location = require('./locationWithCallback.js');
var argv = require("yargs")
	.option('location', {
			demand: false,
			type: 'string',
			alias: 'l',
			description: 'Your location goes here'
		}).help('help')
	.argv;


if (typeof argv.location !== 'undefined'){
	console.log("argv.location :" + argv.location);
	weather ( argv.location, function(currentWeather){
		console.log(currentWeather);
	});
} else {
	location (function(loc){

		console.log("loc.city :" + loc.city);

		if (!loc){
			console.log("Unable to guess the location");
		} else {
			weather (loc.city , function(currentWeather){
				console.log(currentWeather);
			});
		}
	});
}
