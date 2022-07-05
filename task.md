#ToDo List :-
[] Help
[] Organize
[] Tree (├── , └──)
[] global
[] cover some good practice

Project Overview :----

process.argv => It is used to take input by the user in CLI(command line interface).

Step 1 : Enter "node main.js help" this command in the terminal to get all important commands use to run this project. 

Step 2 : After help command run following command options are comes :- 

# node main.js tree "directoryPath";
# node main.js organize "directoryPath"
# node main.js help 

(i) node main.js tree "directoryPath" :-
where,
tree => it is a command which is used to display files and folders in trees structure.
directoryPath => source path given by user, which path you want to display in tree structure.

(ii) node main.js organize "directoryPath" :-
where,
organize => It is a command which is used to organize files and folders file type wise. 
directoryPath => source path given by user, which path you want to organize file type wise.

Following Steps To Organize Command Follow :--
Step (i) -> After give organize command organizeFn() function call firstly :-
# Its Check source path is given by user or not. if not source path not given by user -> this msg display "Kindly enter the path" and not proceed.
# If source path given by user then its check given path is exist or not (means it is valid path or not) , if invalid path -> this msg display "Kindly enter the correct path". *by using fs module -> existsSync(givenPath)*.
# If given path is valid then we check destination directory organized_files already exist or not , If already not exist then we create a new directory where we store data in organize ways , like in this is project we create organized_files directory to store files in organize way. *use path module ->join method to join givenPath and destination folder name for eg. destPath = path.join(givenPath,'organized_files') and after that we use fs module -> mkdirSync(destPath) to create organized_files directory*.

Step (ii) -> organizeFn() call -> organizeHelper(givenPath,destinationPath) and passes two argument.
givenPath => Path given by user.
destinationPath => where we store files in organize way.
# Get array of all files or folder in the givenPath. *by using fs module readdirSync(givenPath) method* 
#