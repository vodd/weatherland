document.addEventListener('deviceready',function(){
	//code js pour le lancement de l'app
},false);

// Angular
var app = angular.module('app',[]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.when('/', {templateUrl: 'partials/home.html'})
		
})