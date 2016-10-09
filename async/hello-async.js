console.log ("Hello will appear in 2 seconds!");

function printAfterTwo(message){
	setTimeout(function(){
		console.log(message);
	}, 2000);
}

printAfterTwo("Async Hello World!");
