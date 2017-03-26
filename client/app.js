angular.module('UniversityGuide.controller',[]);

angular.module("UniversityGuide", ['UniversityGuide.controller', 'ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/home", {templateUrl: "template/home.html", controller:"home"}).
            when("/login", {templateUrl: "template/login.html", controller:"login"}).
            when("/register", {templateUrl: "template/register.html", controller:"register"}).
            when("/department", {templateUrl: "template/department.html", controller:"department"}).
            when("/universities", {templateUrl: "template/universities.html", controller:"universities"}).
            when("/contact", {templateUrl: "template/contact.html", controller:"contact"}).
            otherwise({redirectTo: "/home"});
    }]);