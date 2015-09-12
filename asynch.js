// cb

var data = "abc";

function asynch(cb) {
	setTimeout(function() {
		cb("hello world");
	}, 500);
}

asynch(function(res) {
	data = res;
	console.log(data);
});

console.log(data);

// promise

function asynch() {
	var callback;
	var promise = {
		then: function(cb) {
			callback = cb;
		}
	};

	setTimeout(function() {
		callback("hello world");
	}, 500);

	return promise;
}

asynch().then(function(res) {
	console.log(res);
});
