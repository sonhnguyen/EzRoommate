EzRoommateApp.controller('homeController',['$scope','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){




    $scope.activateProfileTab = function() {
        $('#homeTab').addClass('active');
        $('#findTab').removeClass('active');
        $('#profileTab').removeClass('active');
        $('#favoriteTab').removeClass('active');
        $('#settingTab').removeClass('active');
    }
    
    $scope.activateProfileTab();

    // VARIABLES
    $scope.blog = {};
    $scope.commentContent = "";
    //$scope.connected = true;
    $scope.cmts = [];
    $scope.NameOfUser = NameOfUser; 


    $scope.blogs = [];
    $scope.userName = "Nguyen Hoang Son User Name";

    $scope.blog = {
        time : "29/08/2015",
        authorname:" Nguyễn Hoàng Sơn",
        id : 1,
        authoravatar:"img/user1_avatar.jpg",
        author : "author",
        title:"Need to find another roommate since my room is too big",
        desc:"Make sure you play good Doto",
        imgs:["img/demo-room.jpg", "img/demo-room-2.jpg"]
    };

    $scope.blogs.push($scope.blog);

    $scope.zoomMin = 1;

    $scope.showImages = function(index, parentIndex) {
        $scope.activeSlide = index;
        console.log(index);
        console.log('imgs parent');
        $scope.eventImg= $scope.blogs[parentIndex].imgs;
        console.log($scope.blogs[parentIndex].imgs);
        $scope.showModal('view/template/gallery-zoomview.html');
    };

    $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        backdropClickToClose: true

    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
    });
}

$scope.closeModal = function() {
  $scope.modal.hide();
  $scope.modal.remove()
};

$scope.updateSlideStatus = function(slide) {
  var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
  if (zoomFactor == $scope.zoomMin) {
    $ionicSlideBoxDelegate.enableSlide(true);
} else {
    $ionicSlideBoxDelegate.enableSlide(false);
}
};

$scope.redir = function(){
    //if (!$scope.$$phase) {
    //    $scope.$apply(function() { $location.path("/create"); });
    //}
    //$location.path("/create");       
    $state.go("create");
};

$scope.Init = function()
{


        // NOTIFICATION
    };

    $scope.Init();

}]);