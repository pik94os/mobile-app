angular.module('starter.controllers', [])

.controller('ScanCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then( $imageData => {
          alert(`We got a barcode\n Result: ${$imageData.text}\n Format: ${$imageData.format} \n Cancelled: ${$imageData.cancelled}`);
      }, error => {
              alert("Ошибка сканирования: " + error);
      });
  };
})

.controller('ItemsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.items = [];
  $scope.remove = function(id) {

  };
})

.controller('ItemDetailCtrl', function($scope, $stateParams) {
//  $scope.chat = Item.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
