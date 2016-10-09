function doWork(data, callback){
	callback("done");
}

function doWorkPromise(data){
	return new Promise(function (resolve, reject){
		//resolve("everything worked");

		
		reject({
			error: 'something bad happened'
		});


		//can only call resolve, reject once

		// subsequent calls to resolve, reject will be ignored
	
	});

}


doWorkPromise('Some data here').then(function (data){
	console.log(data);
}, function(error){
	console.log(error.error);
});