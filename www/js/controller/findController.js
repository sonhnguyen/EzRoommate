EzRoommateApp.controller('findController',['$scope','$state','$timeout', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate',function($scope,$rootScope,$state,$timeout, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate){



	$scope.user ={
		Avatar:"img/user1_avatar.jpg",
		Name:"Syed SumaiL Hassan",
		Description:"16 year old professional gamer Dota 2",
		Age: "16",
		Imgs:["img/user1_img1.jpg", "img/user1_img2.jpg", "img/user1_img3.jpg", "img/user1_img4.jpg"]
	};
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
	},
	{
		name:"Xu \"BurNIng\" Zhiley",
		age:"26",
		img:"img/user4_avatar.jpg",
		description:"Hi, I'm a carry"
	},
	{
		name:"Lee \"Faker\" Sang-hyeok",
		age:"20",
		img:"img/user5_avatar.jpg",
		description:"Looking for a roommate who knows LOL"
	},
	{
		name:"David Beckham",
		age:"40",
		img:"img/user6_avatar.jpg",
		description:"Looking for a handsome and gentle guy"
	},
	{
		name:"Cristiano Ronaldo",
		age:"30",
		img:"img/user7_avatar.jpg",
		description:"Would love a guy who has six packs"
	},
	{
		name:"Chai Yee Fung",
		age:"24",
		img:"img/user8_avatar.jpg",
		description:"A calm person who loves dog"
	},
	{
		name:"Jonathan \"Loda\" Berg",
		age:"27",
		img:"img/user9_avatar.jpg",
		description:"I am a single man and has a job"
	},
	{
		name:"Wong Hock Chuan",
		age:"24",
		img:"img/user10_avatar.jpg",
		description:"I love eating"
	}
	];
	$scope.zoomMin = 1;
	$scope.activeSlide =0

	$scope.showUser = function(user){
		console.log(user);
		$scope.viewProfile(user);
	}
	$scope.changeStyle = function(){
		if($scope.state==0)
			$scope.state=1;
		else
			$scope.state=0;
	}
}]);