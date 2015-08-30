EzRoommateApp.controller('findController',['$scope','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){


	$scope.imgs =["img/demo-room.jpg", "img/demo-room-2.jpg"]
	$scope.tags = ['ok1', 'ok2'];

	$scope.users=[{
		name:"Artour \"Arteezy\" Babaev",
		age:"19",
		img:"img/user3_avatar.jpg"
	},
	{
		name:"Clinton \"Fear\" Loomis",
		age:"27",
		img:"img/user2_avatar.jpg"
	}
	];

	$scope.zoomMin = 1;
	$scope.activeSlide =0

	$scope.showUser = function(index){
		console.log(index);
		$scope.viewProfile();
	}

}]);