angular
	.module('app')
	.directive('photoDirective', photoDirective);

function ShowPhoto() {
	var src = elem.find('img').attr('src');
	angular.element(attrs.options).css({'background-image': 'url(' + scope.item.url + ')'});
}

function photoDirective() {
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
                angular.element(attrs.options).css({'background-image': 'url(' + scope.item.thumbnailUrl + ')'});
            }
            elem.bind('click', ShowPhoto);
        }
    };
}