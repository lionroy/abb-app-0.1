// this controller has to deal with user management.. primarily using user.js ctor
// function list
//
//   grabAll: grabAll,
//   grabUserById: grabUserById,
//   addUser: addUser,
//   remUserById: remUserById,
//   setUsers: setUsers,
//   wasLoaded: wasLoaded
//
// unit tests
// console.log("loading testUsers factory ctrl...");
// app.factory("testUsers", function () {
//     console.log("starting testUsers factory ctrl...");
//     var users = [];
//     $scope.users = this.users;
// });


app.factory("users", function (User) {
    console.log("starting users factory ctrl...");

    var users = [];
    var wasEverloaded = false;

    function grabAll() {
        return users;
    }

    function grabUserById(index) {
        return users[index];
    }

    // FIX this..
    function addUser(user) {
        users.addUser(new User("nickname", "e@ma.il", "Fester", "Tester"));
        users.push(user);
    }
    
    // // new function - unfunctional
    // function addNewUser(user) {

    //     // validtion process
    //     if (user.username == 'username' || user.username == 'undefined' || user.username == null){
    //         break;
    //     } else if (user.email == 'email' || user.email == 'undefined' || user.email == null){
    //         break;
    //     } else if (user.fname == 'fname' || user.fname == 'undefined' || user.fname == null){
    //         break;
    //     } else if (user.lname == 'lname' || user.lname == 'undefined' || user.lname == null){
    //         break;
    //     }     
    //     else {
    //         // validation ok - adding user
    //         users.push(user);
    //         $log.log("New User Joined" + user.email)
    //         // redirectTo: ($location.path.something) //
    //     }
    // }



    // TODO: fix this
    function remUserById(index){
        users.splice(index, 1); 
    }

    function setUsers(userCommon) {
        users = [];
        for (var i = 0; i < userCommon.length; i++) {

            users.push(new User(userCommon[i].username, userCommon[i].email,
                userCommon[i].fname, userCommon[i].lname));
                //, userCommon[i].selected, userCommon[i].passport,
                // userCommon[i].role, userCommon[i].hasRole,
                // userCommon[i].isActive))
        }
        wasEverloaded = true;
    }

    function wasLoaded() {
        return wasEverloaded;
    }
    
    // users manager functionallity
    return {
        grabAll: grabAll,
        grabUserById: grabUserById,
        addUser: addUser,
        remUserById: remUserById,
        setUsers: setUsers,
        wasLoaded: wasLoaded
    }
});

// usersService.users.grabAll();