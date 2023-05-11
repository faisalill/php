// A node app to transfer the files to another folder
const { exec, execSync } = require('child_process');
var fs = require('fs');
var path = require('path');

// Check if check folder exists
if (!fs.existsSync('./check')) {
    console.log("Check folder does not exist");
    exec('mkdir check', ()=>{
        console.log("Check folder created");
        exec(`rsync -a  ${__dirname}/ ../../../../../Desktop/github/php/feedback-app`)
    })
}
else{
    exec('mkdir check', ()=>{
        console.log("Check folder created");
        exec(`rsync -a   ${__dirname}/ ../../../../../Desktop/github/php/feedback-app`)
    })
}

console.log('../../../../../Desktop/github/php/feedback-app')



