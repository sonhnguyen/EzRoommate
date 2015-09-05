EzRoommateApp.controller('profileController',['$scope','$state','$timeout','$stateParams',function($scope,$state,$timeout,$stateParams){

	var userid;
	//if($stateParams.userid === 0)
	//	userid = fb.getAuth().uid;
	//else
	
	$scope.user ={
		Avatar:"img/user1_avatar.jpg",
		Name:"Syed SumaiL Hassan",
		Description:"16 year old professional gamer Dota 2",
		Age: "16",
		Imgs:["img/user1_img1.jpg", "img/user1_img2.jpg", "img/user1_img3.jpg", "img/user1_img4.jpg"]
	};
	$scope.tags =['Anime','Dota 2'];

	//$scope.user = userService.getUser(userid);
	//$scope.blogs = blogsService.getBlogs($scope.user.Id);

	$scope.redirEdit = redirEdit;
	$scope.viewProfile = viewProfile;
	$scope.createNewBlog = createNewBlog;
	
	function redirEdit(blogid){
        //BlogID = fb.child("database").child("users").child(fb.getAuth().uid).child("blogs")
        console.log($scope.blogs);
        $state.go("blogdetails",{blogid:blogid});
    };		    		

    function viewProfile(){
		console.log($scope.concu);
    	$state.go('profile');
    }

    function createNewBlog(){      
    	$state.go("create");
    };

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
	
	$scope.showPopupQuestion = function() {
		$state.go("question");
	};

}]);