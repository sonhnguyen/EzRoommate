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
  };


  $scope.viewHome = function($event){
    $('#homeTab').addClass('active');
    $('#findTab').removeClass('active');
    $('#profileTab').removeClass('active');
    $('#notificationTab').removeClass('active');
    $('#settingTab').removeClass('active');
  };

  $scope.viewFind = function($event){
    $('#homeTab').removeClass('active');
    $('#findTab').addClass('active');
    $('#profileTab').removeClass('active');
    $('#notificationTab').removeClass('active');
    $('#settingTab').removeClass('active');
  };
    $scope.viewProfile = function(){
    $('#homeTab').removeClass('active');
    $('#findTab').removeClass('active');
    $('#profileTab').addClass('active');
    $('#notificationTab').removeClass('active');
    $('#settingTab').removeClass('active');    
    $state.go('profile',1);
  };
  $scope.viewNotifications = function($event){
    $('#homeTab').removeClass('active');
    $('#findTab').removeClass('active');
    $('#profileTab').removeClass('active');
    $('#notificationTab').addClass('active');
    $('#settingTab').removeClass('active');
    $('#notifyIcon').css('color','#41B95A');
  };
  $scope.viewSetting = function($event){
    $('#homeTab').removeClass('active');
    $('#findTab').removeClass('active');
    $('#profileTab').removeClass('active');
    $('#notificationTab').removeClass('active');
    $('#settingTab').addClass('active');
  };

}]);