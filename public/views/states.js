angular.module('states', []).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider
    
	.state('home', {
	    url: "/",
	    templateUrl: "/views/home/home.html"
	});

    $urlRouterProvider.otherwise('/home');
}); 
