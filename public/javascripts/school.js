var myApp = angular.module("schoolModule",[])
myApp.controller("schoolController",['$scope', '$http', function($scope, $http){
   

    $scope.searchButtonShow = false;

    $scope.searchButton = function() {

        $scope.searchButtonShow = !$scope.searchButtonShow;

        $scope.name = []
        var postdata = {}
        $http.post('/api/find-schools', postdata)
        .then(result => {
            $scope.name = result.data
             console.log(result.data)
        })
        .catch(err => console.log(err)) 
   }
}])