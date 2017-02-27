var XLSX = require('xlsx');
var workbook = XLSX.readFile('resolutions.xlsx');
console.log(workbook);