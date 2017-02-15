var fs = require('fs');
var path = require('path');
var process = require('process');

fs.readdir('/Users/joshua.boyan/Desktop/resolution-builder', function(err, files) {
	if (err) {
		console.error('Could list the directory.', err);
		process.exit(1);
	}
	files.forEach(function(file, index) {
		console.log(file);
		
	});
		   });