angular
    .module('app')
    .factory('photosFactory', photosFactory);

photosFactory.$inject = ['$http', '$resource'];

function photosFactory($http, $resource) {
    var service = {
        getPhotosByResource: getPhotosByResource,
        getPhotosByHttp: getPhotosByHttp
    };

    function getPhotosByResource() {
        return $resource('http://jsonplaceholder.typicode.com/photos').query({albumId: 1});
    }

    function getPhotosByHttp() {
        return $http.get('http://jsonplaceholder.typicode.com/photos');
    }

    return service;
}