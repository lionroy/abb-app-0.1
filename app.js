var app = angular.module('practico', ["ngRoute", "ui.bootstrap", "ngSanitize"]);

app.config(function ($routeProvider) {

  $routeProvider
    // .when("/", {
    //   template: '<strong>index page</strong><br/><p>Index some content here</p>'
    //   // templateUrl: "views/main.html",
    //   // controller: "homeCtrl"
    // })

    // testing route
    // .when("/", {
    //   // template: '<strong>default page</strong><br/><p>default content here</p>'
    //   templateUrl: "views/test.html",
    //   controller: "testCtrl"
    // })

    
    .when("/", {
      // template: '<strong>default page</strong><br/><p>default content here</p>'
      templateUrl: "pages/home/home.html",
      controller: "homeCtrl"
    })
    .when("/login", {
      // template: '<strong>default page</strong><br/><p>default content here</p>'
      templateUrl: "pages/home/login.html"
      //controller: "loginCtrl"
    })
    
    // main route
    .when("/main", {
      // template: '<strong>default page</strong><br/><p>default content here</p>'
      templateUrl: "pages/main/main.html",
      controller: "mainCtrl"
    })
    .when("/home", {
      // template: '<strong>default page</strong><br/><p>default content here</p>'
      templateUrl: "pages/home/home.html",
      controller: "homeCtrl"
    })
    .when("/users", {
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "./admin/users/users.html",
      controller: "usersCtrl"
    })
    .when("/tasks", {
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "pages/tasks/tasks.html",
      controller: "tasksCtrl"
    })
    .when("/myCards", {
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "pages/cards/myCards.html",
      controller: "cardsGenCtrl"
    })
    .when("/profile", {
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "pages/profile/profile.html",
      controller: "profileCtrl"
    })
    .when("/account", {
      // account redirects to client management Ctrl..
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "admin/pages/clients.html",
      controller: "clientCtrl"
    })

    .otherwise({
      template: '<strong>default 404 routing page</strong><br/><p>No content here</p>'

      // redirectTo: "/"
    })

});

//   testing ctrls
//   app.controller("testCtrl", ["testCtrl", function(User, users) {
//   var users = [];
//   var user = new User("test", "test@test.co", "ftest", "ltest");


//     // "username" = "username",
//     //   "email" = "email@go.co",
//     //   "fname" = "fname",
//     //   "lname" = "lname",

// //       "selected" = false,
// //      "id" = 222333777,
// //       "passport" = 888,
// //       "role" = ["Manager", "Administrator"],
// //       "hasRole" = true,
// //       "isActive" = false,

//     users.push(user);
//       alert(user);
//   }]);
//   console.log(user);


// test service 
console.log("testing the user service...");
// testing a value
app.value('clientId', 'a12345654321x');

// 

app.service("testService", function () {

  // checking the scope ...
  $scope.users = []; // scope is not defined... yet
  alert("starting user test service..." + $scope.users);

  this.clientId = clientId;
  console.log(this.clientId);

  console.log("started user service...");
  console.log($users);
  $scope.users = []; // scope is not defined... yet
  alert("starting user test service..." + $scope.users);


  $scope.test = 'this is not a test';
  console.log(test);
});



// //   // user ctrl code 
// console.log("loading user service...");

// app.factory("usersService", ["$scope","$log", "$http","users","User", function ($scope, $log, $http, users, User) {

// // FIXIT: this code is NOT being read..
// console.log("starting user service...");

// $scope.users = {};

// alert("starting user service..." + $scope.users);

// $http.get("data/userbase.json").then(function mySuccess(response) {
//   for (var i = 0; i < response.data.length; i++) {
//     $scope.users.push(new User(response.data[i].username, response.data[i].email,
//       response.data[i].fname, response.data[i].lname
//       // , response.data[i].selected, response.data[i].id, response.data[i].passport,
//       // response.data[i].role, response.data[i].hasRole, response.data[i].isActive
//     ))
//   }
//   alert("success" + JSON.stringify(response.status));
// }, function myError(response) {
//   alert("error" + JSON.stringify(response.status));
// })
// return {
//   users : users

// }
// }]);