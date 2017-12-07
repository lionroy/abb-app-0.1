    // this controller is the ctor or a single user management.. 
    // primarily to be used by userCtrl.js and usersService.js 
//    console.log("starting user ctor...");

app.factory("User", function (){
    console.log("starting user ctor...");
    
    //  console.log(user);
    //  user ctor
    function User(username, email, fname, lname) {
        this.username = username;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        
        // console.log("finished user ctor...");
    }

    return User;
});

// field-set 
// username = username;
// email = email;
// fname = fname;
// lname = lname;
// selected = false;
// id = 222333777
// passport = 888;
// role = ["Manager", "Administrator"];
// hasRole = true;
// isActive = false;
