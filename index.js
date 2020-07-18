console.log('Before'); //this is an example of synchronous
getUser(1, (panggilUser) => { //passing 1 and a function to panggil argument in getUser
    //console.log('User is ', user);
    getRepositories(panggilUser.gitHubUsername, (daftarRepo) => { //passing panggilUser.gitHubUsername and a function to panggil argument in getRepositories
        console.log('Has repository : ', daftarRepo);
    });
});
console.log('After');
function getUser(id, panggil){ //panggil is callback parameter or argument
    setTimeout(()=>{//this is an example of Asynchronous program
        console.log("Reading user from database...");
        panggil({ id: id, gitHubUsername: 'Testing' }); //parsing the array to the panggilUser (I mean the function that has panggilUser as its argument) as well ass panggil is called back after is passed by getUser that called on line 2
    }, 2000); //2 seconds
}

function getRepositories(username, panggil){
    setTimeout( () => {
        console.log('The username ', username);
        panggil(['Repo1', 'Repo2', 'repo3']); //parsing the array to the daftarRepo (I mean the function that has daftarRepo as its argument) as well ass panggil is called back after is passed by getRepositories that called on line 4
    }, 2000);
}

//However, this isn't done, as you can see from line 2 to line 7 if we want to add more data such as examole as
//getRepositories we'll need to add more code inside getRepositories on line 5. It means nested code, or we'll create
//christmas tree problem (because is nested like a christmas tree). However it's cumbersome and impractical. 
//In order to fix this, go to the Asynchronous_Program_3 to learn about Callback Hell to fix the problem.