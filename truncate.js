"use strict";
var fs = require('fs');
var path = require('path');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var fileType = 'pdf';

fs.readdir(workingDirectory, function(err, files) {

	if (err) {
		console.error('Could list the directory.', err);
		process.exit(1);
	}
	var finishedFiles = [];
	// Loop over The original files
	files.forEach(function(file, index) {
		console.log(file);
		if (file.slice(-3) === fileType) {
			
			
			if(file.slice(0, 6).toString() !== file[index]) {
				console.log(file.slice(0, 6).toString());
				console.log(file[index]);
			finishedFiles.push(file.slice(0,6));
			} else {
				console.log('Did not truncate:',file );
			}

		}
		
	});
	console.log(finishedFiles);
});
		

