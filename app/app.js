var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";
	$scope.ninjas=[
		{
			name:"yosh",
			cinta:"verde",
			precio:50
		},
		{
			name:"kayin",
			cinta:"negra",
			precio:60
		},
		{
			name:"volt",
			cinta:"dorada",
			precio:90
		},
		{
			name:"redF",
			cinta:"amarilla",
			precio:100
		}
	];
});
