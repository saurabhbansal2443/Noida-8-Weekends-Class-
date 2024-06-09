let fs = require("fs");

// CRUD -- create , Read , Update , Delete 

// files

console.log("start")

// fs.writeFile('./one.txt', "I am here using Node JS " , (err, data) => {

// })

// fs.readFile('./one.txt' ,"UTF-8",  function (err, data) {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.appendFile("./one.txt" , "I am appended data " ,(err)=>{
//     console.log(err)
// })
// console.log("end")

// fs.unlink("./one.txt" , function(err) {
//     console.log(err)
// })

// directory 

// fs.mkdir("./demo" , (err) => {
//     console.log(err)
// })

// fs.readdir("./demo" , (err,data)=>{
//     console.log(data)
// })

// fs.rename("./demo" , "./changed" , (err)=>{
//     console.log(err)
// })

fs.rmdir("./demo" , (err, root) => {
    if (err) {
        console.log(err)
    }  
    console.log(root)
})