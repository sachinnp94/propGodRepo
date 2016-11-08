var myApp = angular.module("placesModule",[])
myApp.controller("placesController",['$scope', '$http', function($scope, $http){
   

    $scope.searchButtonShow = false;

    $scope.searchButton = function() {

        $scope.searchButtonShow = !$scope.searchButtonShow;

        $scope.name = []
        var postdata = {}
        $http.post('/api/find-places', postdata)
        .then(result => {
            $scope.name = result.data
             console.log(result.data)
        })
        .catch(err => console.log(err)) 
   }
}])
