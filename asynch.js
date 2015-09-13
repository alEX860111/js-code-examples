// cb

function asynch(cb) {
	setTimeout(function() {
		cb("hello world");
	}, 500);
}

asynch(function(data) {
	console.log(data);
});

// promise

function asynch() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("hello world");
		}, 500);
	});
}

asynch().then(function(res) {
	console.log(res);
});
