
app.controller('cardsGenCtrl', ['$scope', '$rootScope', '$log', '$http', 'myCard',
    function cardsGenCtrl($scope, $rootScope, $log, $http, myCard) {

        // tsts
        $scope.test = "";
        $scope.$log = $log;
        $log.log($scope.test);

        $scope.newCard = "";
        $scope.newCard.test = "1st tester..";
        // $log.log($scope.newCard.test); // undefined

        $scope.newCard = new myCard("author", "acronym", "test text", "'.'");
        $log.log($scope.newCard);
        $log.log($scope.newCard.cardText);

        // $scope.coin = "";

        // $scope.bar = [];
        // $scope.bar.sign = function ($scope) {
        //      ["'@'", "'.'", "'&nbsp;'", "','", "'/'", "|", "|", "*", "-", "~", ">", "<", "=", "^", "!"]
        //      };

        // $log.log($scope.$coin); // ret undefined

        // $scope.newCard.test = "2nd tester..";
        //$log.log($scope.newCard.cardText); // returns value from ctor


        // tst
        //$scope.ctrlWord = $scope.newCard.cardText.substring(0,1);
        //$log.log($scope.$coin); // returns undefined
    }]);



    // ref codes..
    // card fields reset 
    // $scope.cardId = "";              // e.g. 123x
    // $scope.cardAuthor = "";          // e.g. mrs. mingle
    // $scope.cardTitle = "";           // e.g. "woke up this morning..."
    // $scope.cardText = "";            // e.g. "Bla of the Bla Bla"
    // $scope.cardWords = [];           // e.g. ["Bla", "Bla", "Bla"]
    // $scope.cardTerms = [];           // e.g. ["Bla"]
    // $scope.cardAcronym = "";         // e.g. "BBB"
    // $scope.cardSign = "";            // e.g. "" / default = "."
    // $scope.cardExtraWords = "";      // e.g. ["of","the"]
