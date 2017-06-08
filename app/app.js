var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){
	$scope.message="Hello BRIAN";
	$scope.ninjas=['yoshi','cayin','volt','redFlash'];
});
