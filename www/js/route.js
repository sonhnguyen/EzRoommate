






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
    $urlRouterProvider.otherwise('/');

});