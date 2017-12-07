

  app.value('clientId', 'a12345654321x');
  // console.log(this.clientId); // undefined
  // console.log($scope.clientId); // $scope undefined
  
  app.controller('testCtrl', ['clientId', function testCtrl(clientId) {
    this.clientId = clientId;
    // console.log(this.clientId);

  }]);

// older test model
// app.controller("testCtrl", function($scope, $log) {
//     $scope.test = "Bad romance error #1";
//     console.log(test);
//     // $log.$log.push($scope.test);
//   });


// function () {
//     expect(element(by.binding('count')).getText()).toMatch('0');
//     element(by.css('button')).click();
//     expect(element(by.binding('count')).getText()).toMatch('1');
// };