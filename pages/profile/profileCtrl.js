
app.controller("profileCtrl", ['$scope', '$rootScope', '$log', '$http',
    function profileCtrl($scope, $rootScope, $log, $http, users) {

  // function profileCtrl($scope, $rootScope, $log, $http) {

    $scope.o = {

      // from user's ctor
      "username": "Tester",
      "email": "email@snail.co",
      "fname": "Fester",
      "lname": "Tester",

      // profile attrs by function
      "selected": "false",
      "myUrl": "'baseUrl/#!/profiles/' + this.fname + '&=' + this.lname",
      "pUrl": "myFname+&=myLname", // printMyUrl();    
      
      // this.auth    = printAuth();    

      // profile anchors
      "title": "",
      "status": "",
      "content": "",
      "activity": "",
      "pImage": "",

      // passporting workflow
      //     this.onBoardTime = function () {
      //         var onBoardingTime = new Date();
      //         return onBoardingTime;
      //     }
      "passport": 888,
      "country": "",
      "role": ["Manager", "Administrator"],
      "hasRole": true,
      "dob": "", // TODO date+age ctrl
      "isActive": false,
      "activityMeters": "" // etc.
    }
    console.log($scope.o);
    
    // functions - from ctor
    // this.pUrl    = printMyUrl();    
    // this.uId     = grabMyuId();     
    // this.guid    = grabMyGuid();     
    // this.pId     = printMypId(); 
    // this.auth    = printAuth();   
    
  
}]);