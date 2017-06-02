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


  //
  $scope.showDeleteOption = function(card){
      var id = $(this)[0].item._id;
      $('.ui.basic.modal')
            .modal({
              closable  : false,
              onDeny    : function(){
              },
              onApprove : function() {

                $http({
                  method: 'DELETE',
                  url: '/items/' + id
                }).then(function successCallback(response) {
                    card.remove();
                  }, function errorCallback(data) {
                      console.log('Error: ' + data);

              });
              }
            }).modal('show');

}
});

app.directive('removeCard', function () {
    return {
        link: function(scope, element, attrs) {
            element.bind("click",function() {
              scope.showDeleteOption(element.parents(".ui.card"));
            });
        }
    }
});

$(function(){



  $(".add-btn").click(function(){
    $('.ui.modal.add').modal('show');
  });





})
