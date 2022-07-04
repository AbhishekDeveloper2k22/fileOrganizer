const fsModule = require('fs');
const pathModule = require('path');
const filesTypes = require('E:/Web Development By Pep Coding/Web Development By Pep Coding/JavaScript/Node Js Project-1/utility.js');
// Organize Methods All Required Functions Start Here :----
function organizeFn(dirPath){
    // console.log("organize command implemented for ",dirPath);
    // Step To Organize A Directory :-
    // 1. input -> directory path given
    // 2. create -> organized_files -> Directory
    // 3. identify categories of all files present in that input directory 
    // 4. copy/cut files to that organized directory inside of any of category folder 


    // 1. input -> directory path given

    let destPath;

    if(dirPath == undefined){
        // console.log("Kindly enter the path");
        // return;
        dirPath = process.cwd();
        destPath = pathModule.join(dirPath,'organized_files');

    }

    let inputPathExistCheck = fsModule.existsSync(dirPath);

    if(inputPathExistCheck){

        destPath = pathModule.join(dirPath,'organized_files');

        if(fsModule.existsSync(destPath)){

            // console.log("Already Exist destPath");

        }else{
        
            // 2. create -> organized_files -> Directory
            // console.log("Destination Directory Creating......");
            fsModule.mkdirSync(destPath);
            // console.log("Destination Directory Has Been Created");

        }

    }else {
        console.log("Kindly enter the correct path");
    }

    organizeHelper(dirPath,destPath);

    // 4. copy/cut files to that organized directory inside of any of category folder 
}


function organizeHelper(source,destination){

    // 3. identify categories of all files present in that input directory 

    let all_source_directory_data = fsModule.readdirSync(source);

    // console.log(all_source_directory_data);

    for(let i = 0; i<all_source_directory_data.length; i++){

        let all_source_directory_data_address = pathModule.join(source,all_source_directory_data[i]);

        let isFileCheck = fsModule.lstatSync(all_source_directory_data_address).isFile();

        if(isFileCheck){
            // console.log(isFileCheck);
            let category = getCategory(all_source_directory_data_address);

            // console.log("File Category : ",category);
            sendFiles(all_source_directory_data_address,destination,category);
        }

    }

    console.log("Category Folder Created Successfully.....");
    console.log("Working Completed Successfully.....");

}


function getCategory(fileFullPath){

    let ext = pathModule.extname(fileFullPath);

    ext = ext.slice(1);

    for(let type in filesTypes){

        let currentTypeArr = filesTypes[type];

        for(let j = 0; j < currentTypeArr.length; j++){

            if(currentTypeArr[j] == ext){

                return type;

            }

        }
    }

    return "others";

}


function sendFiles(filePath,destinationFolder,categoryName){

    let categoryDirectory = pathModule.join(destinationFolder,categoryName);

    if(fsModule.existsSync(categoryDirectory) == false){

        fsModule.mkdirSync(categoryDirectory);

    }

    let fileName = pathModule.basename(filePath);
    let destFilePath = pathModule.join(categoryDirectory,fileName);
    fsModule.copyFileSync(filePath,destFilePath);

    console.log("File Name : ",fileName,"Copied To => ",categoryName);
    // Removing Original File :---- 
    // fsModule.unlinkSync(filePath);

}

function organizeFn_old(dirPath){
    // console.log("organize command implemented for ",dirPath);
    // Step To Organize A Directory :-
    // 1. input -> directory path given
    // 2. create -> organized_files -> Directory
    // 3. identify categories of all files present in that input directory 
    // 4. copy/cut files to that organized directory inside of any of category folder 


    // 1. input -> directory path given

    let destPath;

    if(dirPath == undefined){
        console.log("Kindly enter the path");
        return;
        // dirPath = process.cwd();
        // destPath = pathModule.join(dirPath,'organized_files');

    }else{

        let inputPathExistCheck = fsModule.existsSync(dirPath);

        if(inputPathExistCheck){

            destPath = pathModule.join(dirPath,'organized_files');

            if(fsModule.existsSync(destPath)){

                // console.log("Already Exist destPath");

            }else{
            
                // 2. create -> organized_files -> Directory
                // console.log("Destination Directory Creating......");
                fsModule.mkdirSync(destPath);
                // console.log("Destination Directory Has Been Created");

            }

        }else {
            console.log("Kindly enter the correct path");
        }

    }

    organizeHelper(dirPath,destPath);

    // 4. copy/cut files to that organized directory inside of any of category folder 
}

module.exports = {
    organizeKey : organizeFn
}
// Organize Methods All Required Functions End Here :----