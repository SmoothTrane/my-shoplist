var app = angular.module("ShopList", []);
app.controller('ItemController', function($scope, $http) {
    $http({
      method: 'GET',
      url: '/items'
    }).then(function successCallback(data) {
        $scope.items = data.data;
        
      }, function errorCallback(data) {
          console.log('Error: ' + data);

  });

});
