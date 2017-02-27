"use strict";
var fs = require('fs');
var path = require('path');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var fileType = '.pdf';

//Read all the file names in the directory
fs.readdir(workingDirectory, function (err, files) {
	if (err) {
		console.error('Could not list the directory.', err);
		process.exit(1);
	}
	//Create array for all file we want to truncate
	var startingFiles = files.filter(function (file) {
		return (file.slice(-4) === fileType);
	});
	// Create array to hold new file names
	var finishedFiles = [];
	// This function renames the file we are at in or startingFiles.forEach function to the disk
	function renameFile(index) {
		fs.rename(workingDirectory + '/' + startingFiles[index], workingDirectory + '/' + finishedFiles[index] + fileType, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
	}
	// Loop over the selected files
	startingFiles.forEach(function (file, index) {
		//Truncate the first file
		if (index === 0) {
			// Push the truncated file to the finished file array
			finishedFiles.push(file.slice(0, 6));
			// Write the truncated name to disk
			renameFile(index);
		} else {
			// Check to make sure the file will not be identical to the file before it before truncating
			if (file.slice(0, 6).toString() !== startingFiles[index - 1].slice(0, 6).toString()) {
				// Push the truncated file to the finished file array
				finishedFiles.push(file.slice(0, 6));
				// Write the truncated name to disk
				renameFile(index);
			// If the file will be identical reformat the full name to be web safe
			} else {
				console.log('Did not truncate:', file);
				// Push the truncated file to the finished file array
				finishedFiles.push(file.toLowerCase().replace(' ', '-'));
				// Write the reformatted name to disk
				renameFile(index);
			}
		}
	});
	console.log(finishedFiles);
});
