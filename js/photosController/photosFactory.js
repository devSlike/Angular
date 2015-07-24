angular
	.module('app')
	.factory('photosFactory', photosFactory);

function photosFactory($resource)
{
	return $resource('http://jsonplaceholder.typicode.com/posts').query({albumId:1});
}