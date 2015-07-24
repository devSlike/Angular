angular
	.module('app')
	.factory('photosFactory', photosFactory);

function photosFactory($http, $resource)
{
	function getPhotosHttp() {
		return $http.get('http://jsonplaceholder.typicode.com/posts');
	}
	
	function getPhotosResource(){
		return $resource('http://jsonplaceholder.typicode.com/posts').query();
	};
	var factory = {
		getPhotosHttp: getPhotosHttp,
		getPhotosResource: getPhotosResource
	}
	return factory;
}