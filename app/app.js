var myNinjaApp= angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/ninjas',{
		templateUrl:'views/ninjas.html',
		controller:'NinjaController'
	})	
	.otherwise({
		redirecTo:'/home'
	});
}]);

myNinjaApp.controller('NinjaController',['$scope','$http',function($scope,$http){

	$scope.removeNinja=function(ninja){
		var removedNinja=$scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja,1);
	};

	$scope.AddNinja=function(){
		$scope.ninjas.push({
			name: $scope.newNinja.name,
			cinta: $scope.newNinja.cinta,
			precio:parseInt($scope.newNinja.precio),
			available:true
		});

		$scope.newNinja.name="";
		$scope.newNinja.cinta="";
		$scope.newNinja.precio="";
	};
	
	$http.get('data/ninjas.json').success(function(data){
		$scope.ninjas=data;
	});
}]);
