const fs = require('fs');

// reading a file

// let fileContent = fs.readFileSync('f1.txt')
// console.log(`data of file 1 -> ${fileContent}`);

// //  writing a file

// fs.writeFileSync('f2.txt', 'This is file 2');

// updating a file

// const essay = ["this is an essay  I want to write into", "a file", "from an array into the file totally"]
// fs.appendFileSync("f3.txt", essay.join("\n"));

// delete a file
// fs.unlinkSync("f2.txt")

// console.log("File deleted");
 

// ----------- Directories ------------------------
// create directories

// fs.mkdirSync("directory_created")

// let folderPath = '/Users/temidayo/development/node/revamp'

// let folderContent = fs.readdirSync(folderPath)
// console.log(`content of directory`, folderContent);


// check if a directory already exists

// let dirExist = fs.existsSync('directory_created')

// console.log(dirExist);


// remove directory

fs.rmdirSync("directory_created", { recursive: true, force: true})
