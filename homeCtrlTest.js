
app.controller("homeCtrlTest", function($scope, $location) {
    $scope.test = "Hello Dolly" + $location.toString();

});