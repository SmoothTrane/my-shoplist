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


function getJSONFields(){
  var form = $(".item-form");
  var formItemName = form.find(".item-form-name").val();
  var formItemPrice = form.find(".item-form-price").val();
  var formItemLink = form.find(".item-form-link").val();
  var formItemImage = form.find(".item-form-image").val();
  var item = {
    name: formItemName,
    priceusd: formItemPrice,
    link: formItemLink,
    image: formItemImage
  };
return item;


}
  $(".add-btn").click(function(){
    $('.ui.modal').modal('show');
  });


  $(".submit-form").click(function(){

    $.ajax({

    url:"/items",
    type:"POST",
    data: getJSONFields(),
    dataType: "jsonp",
    success: function (){

    }

  });


  });
})
