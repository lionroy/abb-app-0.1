app.factory("Profile", function () {

    // profile ctor
    function Profile(userCommon) {
        // some code...

        // from user's ctor
        this.username = "test" // username;
        this.email =    "test" // email;
        this.fname =    "test" // fname;
        this.lname =    "test" // lname;

        // profile attrs by function
        this.myUrl   = 'baseUrl/#!/profiles/'
        + this.fname + '&=' + this.lname;
        // this.pUrl    = printMyUrl();    
        // this.uId     = grabMyuId();     
        // this.guid    = grabMyGuid();     
        // this.pId     = printMypId(); 
        // this.auth    = printAuth();    

        // profile anchors
        this.title = "";
        this.status = "";
        this.content = "";
        this.activity = "";
        this.pImage = "";

    //     // passporting workflow
    //     this.onBoardTime = function () {
    //         var onBoardingTime = new Date();
    //         return onBoardingTime;
    //     }
        
    //     this.selected = "false";

    //     this.passport = 888;
    //     this.country = "";
    //     this.role = ["Manager", "Administrator"];
    //     this.hasRole = true;
    //     this.yearOfBirth = 2000; // TODO date+age ctrl
    //     this.isActive = false;
    //     this.activityMeters; // etc.
    }

    return Profile;

});