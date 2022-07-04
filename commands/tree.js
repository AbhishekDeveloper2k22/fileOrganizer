const fsModule = require('fs');
const pathModule = require('path');

function treeFn(dirPath){
    // 1. input -> directory path given

    if(dirPath == undefined){
        // console.log("Kindly enter the path");
        dirPath = process.cwd();
        treeHelper(dirPath,'');
        return;
    }else{

        let inputPathExistCheck = fsModule.existsSync(dirPath);

        if(inputPathExistCheck){
            treeHelper(dirPath,'');
        }else {
            console.log("Kindly enter the correct path");
        }

    }

}


function treeHelper(givenPath , indent){

    let isFile = fsModule.lstatSync(givenPath).isFile();

    if(isFile == true){
        
        let fileName = pathModule.basename(givenPath);
        
        console.log(indent+"├──"+fileName);
    
    }else{

        let dirName = pathModule.basename(givenPath);
        
        console.log(indent+"└──"+dirName);
        
        let allChildren = fsModule.readdirSync(givenPath);

        for(let i = 0; i < allChildren.length; i++){

            let childAddress = pathModule.join(givenPath,allChildren[i]);
        
            treeHelper(childAddress,indent+'\t');
        
        }

    }

}

module.exports = {
    treeKey : treeFn
}