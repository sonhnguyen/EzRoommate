EzRoommateApp.controller('findController',['$scope','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){


	$scope.imgs =["img/demo-room.jpg", "img/demo-room-2.jpg"]
	$scope.tags = ['ok1', 'ok2'];

	$scope.users=[{
		name:"Nguyễn Hoàng Sơn",
		age:"20",
		img:"img/demo-room.jpg"
	},
	{
		name:"Mai Thiệu Trung",
		age:"23",
		img:"img/demo-room-2.jpg"
	}
	];

	$scope.zoomMin = 1;
	$scope.activeSlide =0

	$scope.showUser = function(index){
		console.log(index);
	}

}]);