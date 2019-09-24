// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function takesFile(fileName: string) {

    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        let file3: string = fileContent.split('\n');

        console.log(file3.length)

    } catch{
        console.log(0);

    }

}

takesFile("meow.txt")
