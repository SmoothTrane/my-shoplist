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


  $scope.showDeleteOption = function(){
      $(".ui.basic.modal").modal("show");

  }
  $scope.deleteItem = function(){
    var id = $(this).closest("data-id");
    console.log(id);
  //   $http({
  //     method: 'DELETE',
  //     url: '/items/ + id'
  //   }).then(function successCallback(response) {
  //       $(this).closest(".ui.card").remove();
  //
  //     }, function errorCallback(data) {
  //         console.log('Error: ' + data);
  //
  // });

  }


});



$(function(){



  $(".add-btn").click(function(){
    $('.ui.modal.add').modal('show');
  });



})
