// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');


function copyContent (fileName1: string, fileName2: string){

    let fileContent = fs.readFileSync(fileName1, 'utf-8');

   fileName2 = fs.writeFileSync(fileName2, fileContent, 'utf8');


}

copyContent ('my-lines.txt', 'my-file.txt')