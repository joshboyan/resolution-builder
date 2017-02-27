var fs = require('fs');
var path = require('path');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var XLSX = require('xlsx');
var workbook = XLSX.readFile('resolutions.xlsx');
var htmlFile = '';
if (typeof process.argv[2] === 'undefined') {
	console.log('\n' + 'Error:' +'\n' + 'You must enter the excel file you wish to build tables from as an argument' + '\n' + 'i.e., node toTable.js resolutions.xlsx');
} else {
	var fileName = process.argv[2];
	var newFileName = fileName.slice(0, -4) + 'html';
}

console.log(newFileName);
// console.log(workbook.Sheets.Sheet1.A1);

// iterate through each worksheet in the workbook
/*for (var sheet in workbook.Sheets) {
	if (typeof sheet !== 'undefined') {
	console.log(sheet);
		htmlFile += '<table summary="Board Meeting resolutions 2013-2014" class="turntable"><thead><tr>'
		for(var cell in sheet) {
			if (typeof cell !== 'undefined') {
				
			}
		}
	}
}
fs.writeFile('')*/