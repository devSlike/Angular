angular
	.module('app')
	.directive('photoDirective', photoDirective);

function photoDirective() {
	var templateHtml = '<img src="{{item.thumbnailUrl}}" /><br>{{item.title}}';
	return {
	        restrict: 'A',
	        replace: false,
	        transclude: false,
	        scope: {
	            index: '=index',
	            item: '=itemdata'
	        },
	        template: templateHtml,
	        link: function (scope, elem, attrs) {
	        	scope.itemdata = elem;
			elem.bind('click', function () {
				var documentResult = document.getElementById("photo");
				angular.element(documentResult).css({
					'background-image': 'url(' + scope.item.url + ')',
					'display': 'block'		
				});
			});
	        }
	};
}