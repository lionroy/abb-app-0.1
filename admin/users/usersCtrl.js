
app.controller('usersCtrl', ['$scope', '$rootScope', '$log', '$http', 'users',
    function userCtrl($scope, $rootScope, $log, $http, users) {

        // initialize browser db of users ( for admin / mgr )
        if (users.wasLoaded()) {
            $scope.users = users.grabAll();
        }
        else {
            $scope.users = [];
            $http.get("./Data/userbase.json").then(function mySuccess(response) {
                users.setUsers(response.data);
                $scope.users = users.grabAll();
                //alert("success" + JSON.stringify(response.status));
            }, function myError(response) {
                alert("error db: " + JSON.stringify(response.status));
            })
        }

        $scope.delete = function(user) {
            var index = users.grabAll().indexOf(user);
            users.remUserById(index);
            $scope.users = users.grabAll();
        }

        // $scope.edit = function(user) {
        //     var index = users.grabAll().indexOf(user);
        //     users.grabUserById(index);
        //     ...
        //     $scope.users = users.grabAll();
        // }


        // page functions
        $scope.addUser = function() {
                  //  users.addUser(new User("Susita", "Car@m.el", "Camel", "Food"));
                    $scope.users = users.grabAll();
                }

        $scope.sortBy = function (prop) {
            $scope.orderProp = prop;
        }

        // Custom filter function
        $scope.filterNameAndSurname = function (user) {
            if ($scope.query == undefined || $scope.query === "") {
                return true;
            }

            var queryLowerCase = $scope.query.toLowerCase();
            var username = user.username.toLowerCase();
            var fname = user.fname.toLowerCase();
            var lname = user.lname.toLowerCase();

            if (fname.includes(queryLowerCase) ||
                lname.includes(queryLowerCase) ||
                username.includes(queryLowerCase)) {
                return true;
            } else {
                return false;
            }
        }

        $scope.selectUser = function (user) {
            user.selected = !user.selected;
        }
    }]);
    // anything below this is useless :)

//$rootSscope.users = usersService().users.grabAll();


// running the ctrl

    // app.controller("usersCtrl", ["scope", "usersService", "users", "log", "routeParams", function ($scope, $usersService, $users, $log, $routeParams) {

    //     $scope.test = "Hello I LOVE You";
    //     console.log($scope.users);
    //     console.log(test);

    //     var user = new User("jo", "em@ail.co", "Josef", "Schmoe");

    //     //   var user = new User({
    //     //     "username": "Donald",
    //     //     "email": "donaldduck@acme.co",
    //     //     "fname": "donald",
    //     //     "lname": "duck",
    //     //     "selected": "false",
    //     //     "id": 123456789,
    //     //     "passport": 888,
    //     //     "role": ["Manager", "Administrator"],
    //     //     "hasRole": "true",
    //     //     "isActive": "false"
    //     // });

    //     console.log($scope.user);
    //     // $scope.user = grabUserById($routeParams.index);

    // }]);