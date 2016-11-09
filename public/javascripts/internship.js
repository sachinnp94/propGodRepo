var myApp = angular.module("internshipModule",[])
myApp.controller("internshipController",['$scope', '$http', function($scope, $http){
   

    $scope.searchButtonShow = true;

    $scope.searchButton = function() {

        // $scope.searchButtonShow = !$scope.searchButtonShow;

        $scope.name = []
        var postdata = {search: $scope.searchBox}
        $http.post('/api/find-internship', postdata)
        .then(result => {
            $scope.name = result.data
             console.log(result.data)
        })
        .catch(err => console.log(err)) 
   }
}])
