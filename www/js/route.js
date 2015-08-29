






EzRoommateApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
            url: "/",
            templateUrl: "view/loginPage.html",
            controller: "loginController"
        })
        .state("home", {
            url: "/home",
            templateUrl: "view/homePage.html",
            controller: "homeController"
        })
    $urlRouterProvider.otherwise('/');

});