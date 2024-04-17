/*
1 use inquirer npm package to get user nput
2. use qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// var qr = require("qr-image");
inquirer
    .prompt([{
        // pass your question here
        message:"Type in your URL:",name:"URL"
    }])
    .then((answers)=>{
        // use user feedback for .....whatever!!
       const url = answers.URL;
       var qr_svg = qr.image(url);
       qr_svg.pipe(fs.createWriteStream("qr_img.png"));
       fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("the file has been saved");
       })
    })
    .catch((error)=>{
        if(error.isTtyError){
            // prompt couldn't be rendered in the current envirornment
        }
        else{
            // something else went wrong
        }
    });