var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";
	$scope.ninjas=[
		{
			name:"yosh",
			cinta:"verde",
			precio:50,
			available:true
		},
		{
			name:"kayin",
			cinta:"negra",
			precio:60,
			available:true
		},
		{
			name:"volt",
			cinta:"dorada",
			precio:90,
			available:false
		},
		{
			name:"redF",
			cinta:"amarilla",
			precio:100,
			available:true
		}
	];
});
