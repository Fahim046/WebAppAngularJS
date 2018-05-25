var app = angular.module('AngJS', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.lookFor = "";

    //  $scope.names = ["ULF", "ALI", "OLA", "SVEN", "ADAM"];
    $scope.names = [];

    $http.get("/Home/Peoplelist")
        .then(function (response) {
            $scope.names = response.data;
        });



    $scope.addPerson = function () {
        $http.post("/Home/AddPerson",
          { FirstName : $scope.firstName, LastName : $scope.lastName }
        ).then(function (response) {
            console.log(reponse);
            $scope.names.push(response.data);
        });

    }

});

////Add Another Controller


app.controller('carCtrl', function ($scope, $http) {
    $scope.lookFor = "";
    //$scope.names = ["Saab", "Vlvo", "BMW", "Audi"];
    $scope.names = [];


     
    $http.get("/Home/Carlist")
        .then(function (response) {
            $scope.names = response.data;
        });
});