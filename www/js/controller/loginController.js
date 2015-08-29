EzRoommateApp.controller('loginController',['$scope','$ionicPopup','$state','$timeout',function($scope,$ionicPopup,$state,$timeout){

    // VARIABLES INITIALIZATION
    $scope.activateHomeTab = function(){
        $('#homeTab').addClass('active');
        $('#profileTab').removeClass('active');
        $('#favoriteTab').removeClass('active');
        $('#settingTab').removeClass('active');
    }
    $scope.logInfo = {};
    $scope.logInfo.username = "";
    $scope.logInfo.password = "";
    $('#myTab').css('display','none');
    $('#navBar').css('display','none');
    $('#loginPage').css('top','0px');

    //fb.onAuth(function(authData) {
    //    $scope.show();
    //    $state.go("home");
    //    $scope.hide();
    //    if (fb.getAuth().provider == "facebook") {
    //        var newUser = {};
    //        newUser.name = fb.getAuth().facebook.displayName;
    //        newUser.provider = "facebook";
    //        newUser.avatar = fb.getAuth().facebook.profileImageURL;
    //        fb.child("database").child("users").child(fb.getAuth().uid).update(newUser);
    //        NameOfUser = fb.getAuth().facebook.displayName;
    //        AvatarOfUser = fb.getAuth().facebook.profileImageURL;
    //        $('#myTab').css('display','block');
    //        $scope.activateHomeTab();
    //        $scope.hide();
    //        $state.go("home");
    //    }
    //
    //    //$timeout(function(){$scope.hide();},5000);
    //});

    $scope.login = function () {
 
        $('#myTab').css('display','block');
        $('#navBar').css('display','block');
        $scope.activateHomeTab();                        
        if (!$('#accountLog').is(':checked')){
        $scope.logInfo.username = "";
        $scope.logInfo.password = "";                             
        }                        
        $state.go("home");   


    };

    //LOGIN WITH FACEBOOK
    $scope.loginwithFacebook = function() {
        $('#myTab').css('display','block');
        $('#navBar').css('display','block');
        $scope.activateHomeTab();
        $state.go("home"); 
    }
}]);