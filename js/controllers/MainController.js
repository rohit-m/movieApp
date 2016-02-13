app.controller('filmController', function ($scope, $http) {
    $scope.$watch('filmName', function () {
        getMovie();
    });

    $scope.search = "Deadpool"

    function getMovie() {
        if($scope.filmName != undefined) {
            console.log($scope.filmName);
            var sterileName = $scope.filmName.replace(" ", "+");
            $http.get("http://www.omdbapi.com/?t=" + sterileName + "").then(function successCallback(response) {
                $scope.filmDesc = response.data;
                //console.log(response);
            }, function errorCallBack(response) {

            });
        }
    };
});

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