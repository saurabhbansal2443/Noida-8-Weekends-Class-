// import {sum , sub , mult , div } from "./Math.js";

// import perimeter from "./Math.js"


//  console.log(sum(2,3))

//  console.log(sub(2,4))

//  console.log(div(2,5))


// console.log( perimeter(1))

// import chalk from 'chalk';

// console.log(chalk.red('Hello world!'));


import  figlet  from "figlet";

figlet("Saurabh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
