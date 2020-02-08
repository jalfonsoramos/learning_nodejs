// Working With File System Module (Creating,Reading,Deleting,Renaming) Files

const fs = require('fs');

//create a file
// fs.writeFile('dummy.txt', 'this is an example', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File successfully created');
//         fs.readFile('dummy.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }
// });

//rename file
// fs.rename('dummy.txt','dummy2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully rename the file')
//     }
// });

//append file
// fs.appendFile('dummy2.txt','some data being appended',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully appended data to file');
//     }
// })

//delete file
fs.unlink('dummy2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully deleted the file');
    }
});