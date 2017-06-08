var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";
	$scope.ninjas=[
		{
			name:"yosh",
			cinta:"verde"
		},
		{
			name:"kayin",
			cinta:"negra"
		},
		{
			name:"volt",
			cinta:"dorada"
		},
		{
			name:"redF",
			cinta:"amarilla"
		}
	];
});
