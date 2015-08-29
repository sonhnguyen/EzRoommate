EzRoommateApp.controller('MainController', ['$scope','$state','$ionicPopover','$ionicPopup','$ionicLoading','$ionicModal','$ionicHistory',function ($scope,$state,$ionicPopover,$ionicPopup,$ionicLoading,$ionicModal,$ionicHistory) {
  

  console.log('ok');
  $scope.headerGoBack = function () {
    $ionicHistory.goBack();
    if ($ionicHistory.backTitle() === 'Home'){
      $scope.viewHome();
      $('#myTab').css('display','block');
    }
    if ($ionicHistory.backTitle() === 'Profile'){
      $scope.viewProfile();
      $('#myTab').css('display','block');
    }    
    if ($ionicHistory.backTitle() === 'TriipMe Login'){
      $('#myTab').css('display','none');
      $('#navBar').css('display','none');
    }
  }

}]);