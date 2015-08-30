EzRoommateApp.controller('blogcreateController',['$scope','$cordovaCamera','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$cordovaCamera,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){


    $scope.newblog = {};
    $scope.newblog.likes = {};
    $scope.newblog.comments = {};
    $scope.newblog.likes.num = 0;
    $scope.newblog.comments.num = 0;
    $scope.photos=[];
    $scope.photo={};
    $scope.newblog.events=[];
    $scope.event={};

    $scope.cities =['Hà Nội, Hồ Chí Minh, Gia lai'];
    $scope.photos =["img/demo-room.jpg", "img/demo-room-2.jpg"]


    //for (var i = 0; i < 100; i++) {
    //    $scope.photos.push({
    //        width: 300,
    //        height: 300,
    //        src: 'http://placekitten.com/' + 299 + '/' + 300
    //    });
    //};

    $scope.createBlog = function(){
        $state.go('home');    
    };

    // $scope.imageHandle = function(Type) {
    //     var options = {
    //         quality : 100,
    //         destinationType : Camera.DestinationType.DATA_URL,
    //         sourceType : Type,
    //         allowEdit : true,
    //         encodingType: Camera.EncodingType.JPEG,
    //         popoverOptions: CameraPopoverOptions,
    //         saveToPhotoAlbum: true
    //     };

    //     $cordovaCamera.getPicture(options).then(function(imageData) {
    //         var imgURI = "data:image/jpeg;base64," + imageData;
    //         $scope.newblog.img = imageData;
    //         $scope.photos.push(imgURI);
    //         $('#img-container').css('height','250px')
    //     }, function(err) {
    //        console.log(err);
    //     });
    // }

    $scope.zoomMin = 1;
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        console.log(index);
        $scope.eventImg= $scope.photos;
        console.log($scope.eventImg);
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

}]);

