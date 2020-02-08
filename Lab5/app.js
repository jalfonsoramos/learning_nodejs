// Working With File System Module. Creating and Deleting Folders

const fs = require('fs');

// fs.mkdir('dummy', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         // fs.rmdir('dummy',(err)=>{
//         //     if(err){
//         //         console.log(err);
//         //     }
//         //     else{
//         //         console.log('successfully deleted the folder')
//         //     }
//         // });
//         //console.log('folder successfully created');
//         fs.writeFile('./dummy/dummy.txt', '123', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('successfully created file');
//             }
//         });
//     }
// });

// fs.unlink('./dummy/dummy.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         fs.rmdir('dummy', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('delete folder');
//             }
//         });
//     }
// });

fs.readdir('dummy',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./dummy/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('successfully deleted file');
                }
            })
        }
    }
});