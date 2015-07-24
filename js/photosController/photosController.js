angular
	.module('app')
	.controller('photosController', photosController);

function photosController($scope, photosFactory) {
	$scope.photos = photosFactory();
	//	    $scope.photos = HttpPhotos.query({ index: 1 });
}