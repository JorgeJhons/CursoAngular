var myNinjaApp= angular.module('myNinjaApp',[]);

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
