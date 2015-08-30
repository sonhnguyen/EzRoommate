EzRoommateApp.controller('notificationController',['$scope','$state',function($scope,$state){
    $scope.notiList = [{
        time:'9:17 30/08/2015',
        type:'like',
        authorname:'Arteezy',

    },{
        time:'10:17 28/08/2015',
        type:'comment',
        authorname:'Fear',

    },{
        time:'6:12 30/08/2015',
        type:'message',
        authorname:'Arteezy',   
        message:'Hi, Would you like to visit my place tomorrow?'

    }];
    //NotiSeen = true;*
}]);

