"use strict";
var fs = require('fs');
var path = require('path');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
// Use first argument for file length or default to 6 characters
var finishedLength = process.argv[2] || 6;
// Use second argument for file type or default to '.pdf'
var fileType = process.argv[3] || '.pdf';

//Read all the file names in the directory
fs.readdir(workingDirectory, function (err, files) {
	if (err) {
		console.error('Could not list the directory.', err);
		process.exit(1);
	}
	//Create array for all file we want to truncate
	var startingFiles = files.filter(function (file) {
		return (file.slice(-fileType.length) === fileType);
	});
	// Create array to hold new file names
	var finishedFiles = [];
	// This function truncates the file we are at in or startingFiles.forEach function to the disk
	function truncateFile(index) {
		fs.rename(workingDirectory + '/' + startingFiles[index], workingDirectory + '/' + finishedFiles[index] + fileType, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
	}
	// This function renames the file we are at in or startingFiles.forEach function to the disk
	function renameFile(index) {	
		fs.rename(workingDirectory + '/' + startingFiles[index], workingDirectory + '/' + finishedFiles[index], function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
	}
	// Loop over the selected files
	startingFiles.forEach(function (file, index) {
		//Truncate the first file
		if (index === 0) {
			// Push the truncated file to the finished file array
			finishedFiles.push(file.slice(0, finishedLength));
			// Write the truncated name to disk
			truncateFile(index);
		} else {
			// Check to make sure the file will not be identical to the file before it before truncating
			// If the file will be identical reformat the full name to be web safe
			if (finishedFiles.indexOf(file.slice(0, finishedLength).toString()) > -1) {
				console.log('Did not truncate:', file);
				// Push the truncated file to the finished file array
				finishedFiles.push(file.toLowerCase().replace(/\s/gi, '-'));
				// Write the reformatted name to disk
				renameFile(index);				
			// Truncate the file if it will not create a duplicate 
			} else {
				// Push the truncated file to the finished file array
				finishedFiles.push(file.slice(0, finishedLength));
				// Write the truncated name to disk
				truncateFile(index);				
			}
		}
	});
});
