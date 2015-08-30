






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
        .state("create", {
            url: "/create",
            templateUrl: "view/blogcreatePage.html",
            controller: "blogcreateController"
        })
        .state("find", {
            url: "/find",
            templateUrl: "view/findPage.html",
            controller: "findController"
        })
        .state("profile", {
            url: "/profile",
            templateUrl: "view/profilePage.html",
            controller: "profileController"
        })
        .state("notification", {
            url: "/notification",
            templateUrl: "view/notificationPage.html",
            controller: "notificationController"
        })
        .state("setting", {
            url: "/setting",
            templateUrl: "view/settingPage.html",
            controller: "settingController"
        })
    $urlRouterProvider.otherwise('/');

});