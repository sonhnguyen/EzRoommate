EzRoommateApp.controller('questionController',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){

    $scope.questionLists=[
    {
        question:"How often do you clean the room?",
        answers:[

        {text:'Everyday',value:'1'},
        {text:'5 times a week',value:'1'},
        {text:'3 times a week',value:'1'},
        {text:'Once a week',value:'1'},

        ],
    },
    {
        question:"Do you smoke?",
        answers:[

        {text:'Yes',value:'2'},
        {text:'No',value:'2'},

        ],
    },
    {
        question:"How often do you drink at home?",
        answers:[

        {text:'Everyday',value:'3'},
        {text:'5 times a week',value:'3'},
        {text:'3 times a week',value:'3'},
        {text:'Once a week',value:'3'},

        ],
    },        
    {
        question:"What time do you go to bed?",
        answers:[

        {text:'9 PM',value:'4'},
        {text:'11 PM',value:'4'},
        {text:'2 AM',value:'4'},
        {text:'Sleep is for the weak',value:'4'},

        ],
    },
    ];
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Successfully submission',
     template: 'Your submission has been sent to this person.'
   });
   alertPopup.then(function(res) {
     $state.go('home');
   });
 };
}]);

