app.controller('filmController', function ($scope, $http) {

    $scope.filmName = "Deadpool";

    $scope.$watch('filmName', function () {
        getMovie();
    });

    function getMovie() {
        if($scope.filmName != undefined) {
            var sterileName = $scope.filmName.replace(" ", "+");
            $http.get("http://www.omdbapi.com/?t=" + sterileName + "").then(function successCallback(response) {
                $scope.filmDesc = response.data;
            }, function errorCallBack(response) {

            });
        }
    }
});

//To get CORS to work
angular.module('myApp')
    .config(function ( $httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }).factory('featuresData', function ($http) {
    return{
        doCrossDomainGet: function() {
            return $http({
                url:'http://other.domain.com',
                method: 'GET'
            })
        }
    }
});