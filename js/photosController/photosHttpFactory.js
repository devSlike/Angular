angular
	.module('app')
	.factory('photosHttpFactory', photosHttpFactory);

function photosHttpFactory($resource)
{
	return $http.get('http://jsonplaceholder.typicode.com/photos);
}