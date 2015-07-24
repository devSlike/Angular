angular.module('app', ['ngResource'])
	.controller('photosController', function ($scope, ResPhotos) {
	    $scope.items = ResPhotos;
	    //	    $scope.photos = HttpPhotos.query({ index: 1 });
	})
    .factory('ResPhotos', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/photos/').query();
    })
    //.factory('HttpPhotos', function ($http) {
    //    return $http.get('http://jsonplaceholder.typicode.com/photos/');
    //    //return $http.get('http://jsonplaceholder.typicode.com/photos/').then(function (response) {
    //    //    $scope.photos = response.data;
    //    //}).error(function (err) {
    //    //    console.log('ERROR', err);
    //    //});
    //})
.directive('photoDirective', [function () {
    return {
        restrict: 'A',
        replace: false,
        transclude: false,
        scope: {
            index: '=index',
            item: '=itemdata'
        },
        template: '<a href="#"><img src="{{item.thumbnailUrl}}" alt="{{item.title}}" />{{item.title}}</a>',
        link: function (scope, elem, attrs) {

            if (parseInt(scope.index) === 0) {
                angular.element(attrs.options).css({ 'background-image': 'url(' + scope.item.thumbnailUrl + ')' });
            }

            elem.bind('click', function () {

                var src = elem.find('img').attr('src');

                // call your SmoothZoom here
                angular.element(attrs.options).css({ 'background-image': 'url(' + scope.item.thumbnailUrl + ')' });
            });
        }
    };
}])