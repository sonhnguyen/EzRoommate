EzRoommateApp.controller('homeController',['$scope','$state','$timeout',function($scope,$state,$timeout){

    $scope.activateProfileTab = function() {
        $('#homeTab').removeClass('active');
        $('#profileTab').addClass('active');
        $('#favoriteTab').removeClass('active');
        $('#settingTab').removeClass('active');
    }

    if(NameOfUser == "" || AvatarOfUser == ""){
            NameOfUser = "Nguyen Hoang Son";
            AvatarOfUser = "";
        };
    

    // VARIABLES
    $scope.blog = {};
    $scope.commentContent = "";
    //$scope.connected = true;
    $scope.cmts = [];
    $scope.NameOfUser = NameOfUser; 


    $scope.blogs = [];
    $scope.userName = "Nguyen Hoang Son User Name";

    $scope.blog = {
        time : "01/01/1990",
        authorname:" author name",
        id : 1,
        authoravatar:"img/avatar.jpg",
        author : "author",
        title:" title",
        desc:"desc",
        img:"img/avatar.jpg",


    };

    $scope.blogs.push($scope.blog);
        console.log('ok');

    console.log($scope.blogs);
    $scope.Init = function()
    {


        // NOTIFICATION
    };

    $scope.Init();

}]);