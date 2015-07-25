angular
	.module('app')
	.controller('photosController', photosController);

photosController.$inject = [
	'$scope',
	'photosFactory'
];

function photosController($scope, photosFactory) {
	$scope.photos = photosFactory.getPhotosByResource();
}