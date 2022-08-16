const glob = require("glob");

// glob("*.js", (error, filesWithJs)=>{
//     if(error){
//         console.log("error");
//     }    
//     console.log(filesWithJs)
    
// });

// function forfiles(err, files) {
//     return console.log(files);
// }
// glob('../**/*.json', forfiles)


// options = {
//     cwd:'../'
// },
// // forfiles = (err, files)=>console.log(files);

// forfiles = (err, files)=> console.log(files)

// glob('**/*.js', options, forfiles);

// console.log("This is process.cwd", process.cwd())
// console.log("This is _dirname", __dirname)

// console.log("hello ")

const fs = require('fs');
 
const readFiles = function (pat, forFile) {
    // pattern
    pat =  '*.json';
    // for file method
    forFile = (contentofFile, fileInDirectory) => {
        console.log(' ');
        console.log(fileInDirectory);
        console.log(' ');
        console.log(contentofFile);
        console.log(' ');
    };
    // using glob
    glob(pat, function (err, files) {
        if (err) {
            console.log(err);
        } else {
            files.forEach(function (file) {
                fs.readFile(file, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        forFile(data.toString(), file);
                    }
                });
            });
        }
    });
};
 
readFiles();