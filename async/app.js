
var weather = require('./weather.js');
var location = require('./location.js');
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
	weather (argv.location).then(function(currentWeather){
		console.log(currentWeather);
	}, function(error){
		console.log(error);
	});
} else {
	location ().then(function(data){
		weather(data.city).then(function(currentWeather){
			console.log(currentWeather);
		}, function(error){
			console.log(error);
		});
	});
}
