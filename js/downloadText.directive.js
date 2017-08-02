(function(module){
'use strict';
	module.directive("downloadText", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
		console.log(scope);
        	if(scope.ctrl.text.trim().length >0){   
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(scope.ctrl.text));
                element.setAttribute('download', "logImport.txt");    
                element.text =  'more';   
                $(elem).parent().append(element);
             }
        }
    }
}]);

}(angular.module('common')));

