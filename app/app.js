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

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";

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

	$scope.ninjas=[
		{
			name:"alam",
			cinta:"cyan",
			precio:50,
			available:true,
			thumb:"content/img/1.png"
		},
		{
			name:"bebuch",
			cinta:"blue",
			precio:60,
			available:true,
			thumb:"content/img/2.png"
		},
		{
			name:"clavin",
			cinta:"yellow",
			precio:90,
			available:true,
			thumb:"content/img/3.png"
		},
		{
			name:"doroty",
			cinta:"red",
			precio:100,
			available:true,
			thumb:"content/img/4.png"
		}
	];
});
