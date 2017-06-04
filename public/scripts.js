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

app.directive('removeCard', function ($http) {
    return {
        link: function(scope, element, attrs) {
            element.bind("click",function($event) {
              $event.stopPropagation();
              var id = scope.item._id;
              var card = element.parents(".ui.card");
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
            });
        }
    }
});
app.directive('editCard', function ($http) {
    return {
        link: function(scope, element, attrs) {
            element.bind("click",function($event) {
              $event.stopPropagation();
              $(".ui.small.modal.edit").find(".item-form").attr("action","/editItem/");
              var itemId = scope.item._id
              $(".ui.small.modal.edit").modal("show");
              $(".ui.small.modal.edit").find(".item-form-name").val(scope.item.name);
              $(".ui.small.modal.edit").find(".item-form-price").val(scope.item.priceusd);
              $(".ui.small.modal.edit").find(".item-form-link").val(scope.item.link);
              var editRoute = $(".ui.small.modal.edit").find(".item-form").attr("action") + itemId;
              $(".ui.small.modal.edit").find(".item-form").attr("action", editRoute);



            });
        }
    }
});

app.directive('linkCard', function(){

return {
  link: function(scope,element, attrs){
    element.bind("click", function($event){
      $event.stopPropagation();
      window.location.href = scope.item.link

    });

  }
}


});


$(function(){



  $(".add-btn").click(function(){
    $('.ui.modal.add').modal('show');
  });



$(".link-btn").click(function(e){
  e.stopPropagation();

});

function showNotification(){

}

})
