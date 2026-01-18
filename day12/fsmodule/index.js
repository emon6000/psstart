const fs = require('fs');

// console.log(fs);
// fs.writeFile('./demo1.txt',"This ggis a simple text file",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File created successfully");
//     }
// })
// fs.writeFile('./demo1.txt',"This is a simple text file",(err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File created successfully");
//     }
// })
// fs.appendFile('demo1.txt',"\nAppended text",(err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("\nFile created successfully");
//     }
// })
// fs.readFile('demo1.txt','utf-8',(data, err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.rename('demo1.txt','demo2.txt',(err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("\nFile renamed successfully");
//     }
// })

// fs.unlink('demo2.txt',(err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("\nDeleted successfully");
//     }
// })

fs.exists('demo2.txt',(err) =>{
    if(err){
        console.log("Found");
    }
    else{
        console.log("\nNot Found");
    }
})