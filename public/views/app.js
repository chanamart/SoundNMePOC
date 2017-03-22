var app = angular.module('SoundNMe', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'states',
    'ngStorage',
    'constants',
    'HomeController',
    'HomeDirective',
]).run(run);


function run($rootScope, $http, $location, $localStorage) {
    
    if ($localStorage.currentUser) {
	
        $http.defaults.headers.common['Authorization'] = $localStorage.currentUser.token;
	
    }
    
}
