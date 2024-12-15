// const uploadSingleFile = (fileObject) => {


//     let uploadPath = __dirname + fileObject.name;

//     fileObject.mv(uploadPath, function (err) {
//         if (err) {
//             console.log(err)
//             return {
//                 status: 'not',
//                 path: null,
//                 error: JSON.stringify(err)
//             }
//         }
//         return {
//             status: 'sucess',
//             path: uploadPath,
//             error: JSON.stringify(err)
//         }

//         res.send('File uploaded to ' + uploadPath);
//     });
// }

const path = require('path');
const fs = require('fs');

// const uploadSingleFile = async (file) => {
//     const timestamp = Date.now();

//     const fileName = `${file.name}-${'gio'}-${timestamp}`

//     const uploadPath = path.join(__dirname, fileName);

//     return new Promise((resolve, reject) => {
//         file.mv(uploadPath, (err) => {
//             if (err) {
//                 return reject(err);
//             }
//             console.log(uploadPath)
//             console.log(__dirname)
//             resolve({
//                 status: 'success',
//                 path: uploadPath
//             });
//         });
//     });
// };

const uploadSingleFile = async (file) => {
    const projectRoot = process.cwd();
    const targetDir = path.resolve(projectRoot, 'src', 'public')
    const timestamp = Date.now();
    const fileName = `${file.name}-${'gio'}-${timestamp}`

    // const uploadPath = path.join(__dirname, fileName);
    const uploadPath = path.join(targetDir, fileName)

    return new Promise((resolve, reject) => {
        file.mv(uploadPath, (err) => {
            if (err) {
                return reject(err);
            }
            console.log(uploadPath)
            console.log(__dirname)
            resolve({
                status: 'success',
                path: uploadPath
            });
        });
    });
};


const uploadMultipleFile = () => {

}
module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}