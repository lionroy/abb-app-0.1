
app.controller("navCtrl", function ($scope, activeUser,  $uibModal) {
    $scope.isLoggedIn = function(){
         return activeUser.isLoggedIn();
    };

      
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "./pages/home/login.html",
            controller: "loginCtrl"
        })
    }
});