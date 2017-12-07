app.controller('clientCtrl', function ($scope, clientservice) {
    
        $scope.clients = clientservice.list();
    
        $scope.saveClient = function () {
            clientservice.save($scope.newclient);
            $scope.newclient = {};
        }
    
    
        $scope.delete = function (id) {
    
            clientservice.delete(id);
            if ($scope.newclient.id == id) $scope.newclient = {};
        }
    
    
        $scope.edit = function (id) {
            $scope.newclient = angular.copy(clientservice.get(id));
        }
    })