#!/usr/bin/env node 
let inputArr = process.argv.slice(2);
const helpObj = require('./commands/help.js');
const organizeObj = require('./commands/organize.js');
const treeObj = require('./commands/tree.js');
// Shehbang code -> #!/usr/bin/env node 

// let filesTypes = {
//     media: ["mp4", "mkv"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"],
//     images: ['jpg','jpeg','png']
// }
// module.exports = utility;
// console.log(inputArr);

// node main.js tree "directoryPath";
// node main.js organize "directoryPath"
// node main.js help 

let command = inputArr[0];

switch(command){

    case "tree" :
        // treeFn(inputArr[1]);
        treeObj.treeKey(inputArr[1]);
        break;
    
    case "organize" : 
        // organizeFn(inputArr[1]); 
        organizeObj.organizeKey(inputArr[1]);
        break;

    case "help" :
        // helpFn();
        helpObj.helpKey(); 
        break;

    default:
        console.log("Please 🙏 Enter Right Command");
        break;
}