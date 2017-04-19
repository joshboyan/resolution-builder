# resolution-builder

This program is specifically for creating formatted HTML5 tables with all websafe characters form xlsx spreadsheets 
for the Board Meetings Resolutions Archive. Example: http://www.pcc.edu/about/administration/board/minutes/resolutions/

These tables need a table header and a th in the begining of each row and the first cell needs to link to the corresponding pdf in 
the documents directory. 

To use the program:

1. Move all the pdfs to the resloution-builder folder.
2. Move the excel workbook to the folder.
3. Open git bash and cd into the reolution-builder directory.
4. Run node truncate.js to truncate all the files and format any duplicates to web safe text.
5. Run node toTable.js resolutions.xlsx where the resolutions.xlsx is the name of the excel 
workbook you would like to create the table from.

