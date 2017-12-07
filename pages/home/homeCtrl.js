
// app.controller("homeCtrl", function ($scope) {
//   $scope.test = "Hello Dolly";
//   console.log(test);
//   // hmm...
//   // $scope.data = "data.json";
//   // $scope.user = "";
// });

app.controller("homeCtrl", function($scope, $uibModal) {
  
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "./pages/home/login.html",
            controller: "loginCtrl"
        })
    }

    // const fs = require('fs');
    
    // // Returns the path to the word list which is separated by `\n`
    // const wordListPath = require('word-list');
    
    // const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
    // //=> […, 'abmhos', 'abnegate', …]
    // var x = [];



    // for (var i = 0; i < 30; i++){
    //     x[i] = wordArray[i];
    //     console.log(x);
    // }
});



