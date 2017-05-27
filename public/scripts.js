var app = angular.module("ShopList", []);
app.controller('ItemController', function($scope, $http) {
    $http({
      method: 'GET',
      url: '/items'
    }).then(function successCallback(response) {
        $scope.items = response.data;

      }, function errorCallback(data) {
          console.log('Error: ' + data);

  });






});



$(function(){

  $(".add-btn").click(function(){
    $('.ui.modal').modal('show');
  });
})
