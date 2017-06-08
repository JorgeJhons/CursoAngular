var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";

	$scope.removeNinja=function(ninja){
		var removedNinja=$scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja,1);
	};

	$scope.ninjas=[
		{
			name:"alam",
			cinta:"cyan",
			precio:50,
			available:true
		},
		{
			name:"bebuch",
			cinta:"blue",
			precio:60,
			available:true
		},
		{
			name:"clavin",
			cinta:"yellow",
			precio:90,
			available:true
		},
		{
			name:"doroty",
			cinta:"red",
			precio:100,
			available:true
		}
	];
});
