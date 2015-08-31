EzRoommateApp.controller('findController',['$scope','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){



	$scope.imgs =["img/demo-room.jpg", "img/demo-room-2.jpg"]
	$scope.tags = ['ok1', 'ok2'];
	$scope.state=0;
	console.log($scope.state);
	$scope.users=[{
		name:"Artour \"Arteezy\" Babaev",
		age:"19",
		img:"img/user3_avatar.jpg",
		description:"Hi, I'm just a boy play Dota 2"
	},
	{
		name:"Clinton \"Fear\" Loomis",
		age:"27",
		img:"img/user2_avatar.jpg",
		description:"Hi, I'm just a man play Dota 2"
	}
	];
	$scope.zoomMin = 1;
	$scope.activeSlide =0

	$scope.showUser = function(index){
		console.log(index);
		$scope.viewProfile();
	}
	$scope.changeStyle = function(){
		if($scope.state==0)
			$scope.state=1;
		else
			$scope.state=0;
	}
}]);