module.directive('testrect', function() {
    return {
        restrict: 'E',
        templateNamespace: 'svg',
        
        template: '<svg width="50" height="50"><rect width="55" height="55" style="fill:rgb(35,125,190);stroke-width:3;stroke:rgb(0,0,0)" />
        <text x=".95em" y="1.6em" font-family="impact" font-size="1.3em" fill="white">
            {{item.substring(0, 1) + ' ' | uppercase}}
        </text></svg>',
        replace: true
    };
});