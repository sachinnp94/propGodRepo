var myApp = angular.module("collegeModule",[])
myApp.controller("collegeController",['$scope', '$http', function($scope, $http){
   

    $scope.searchButtonShow = true;

    $scope.searchButton = function() {

        // $scope.searchButtonShow = !$scope.searchButtonShow;

        $scope.name = []
        var postdata = {search: $scope.searchBox}
        $http.post('/api/find-colleges', postdata)
        .then(result => {
            $scope.name = result.data
             console.log(result.data)
        })
        .catch(err => console.log(err)) 
   }
}])
