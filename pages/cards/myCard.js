// this controller is the ctor or a single user management.. 
// primarily to be used by userCtrl.js and usersService.js 
//    console.log("starting user ctor...");

app.factory("myCard", function () {
    console.log("starting user ctor...");

    //  console.log(user);
    //  user ctor
    function myCard(author, acronym, text) {

        this.cardId = "456z";
        this.cardAuthor = author;
        this.cardTitle = "woke up this morning...";
        this.cardText = text;
        this.cardWords = ["Bla", "Bla", "Bla"];
        this.cardTerms = ["Bla"];
        this.cardAcronym = acronym;
        this.cardSign = ".";
        this.cardExtraWords = ["of the", "of", "the"];
    }

    // console.log("finished card ctor...");
    return myCard;
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
