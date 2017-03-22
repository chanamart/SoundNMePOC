var app = angular.module('HomeDirective', []);

app.directive('homeDirective', function(){
    return {
	restrict: 'E',
	scope: {},
	templateUrl: "views/home/home.directive.html",
	controller: "HomeCtrl",
	controllerAs: "vm",
	bindToController: true
    };
});
