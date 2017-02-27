var fs = require('fs');
var path = require('path');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var XLSX = require('xlsx');
var workbook = XLSX.readFile('resolutions.xlsx');
var sheets = workbook.Sheets;
var htmlFile = '';

// Check that the file is the correct type
if (process.argv[2].slice(-4) !== 'xlsx') {
	console.log('\n' + 'This program will only convert xlsx files' + '\n' + 'Please enter correct file type');
	return;
} else {
	// Check to make sure user provides argument for command line
	if (typeof process.argv[2] === 'undefined') {
		console.log('\n' + 'Error:' + '\n' + 'You must enter the excel file you wish to build tables from as an argument' + '\n' + 'i.e., node toTable.js resolutions.xlsx');
		return;
	} else {
		// Create the HTML file name to write the table to
		var fileName = process.argv[2];
		var newFileName = fileName.slice(0, -4) + 'html';
	}
}
//console.log(workbook.Sheets.Sheet1.A1);

// Iterate through each worksheet in the workbook
for (var sheet in sheets) {
	if (typeof sheet !== 'undefined') {
		htmlFile += '<table summary="" class="turntable">' + '\n' + '<thead>' + '\n' + '<tr>';
		// Initialize counter to track cell rows
		var counter = 0;
		// Iterate over each cell value on the sheet
		for (var cell in sheets[sheet]) {
			console.log(sheets[sheet][cell].h);
			counter++;
		}
		
	}
}
/*fs.writeFile(newFileName, htmlFile, (err) => {
	if (err) throw err;
	console.log('It worked!');
});*/
