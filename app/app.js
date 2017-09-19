(function(){
    'use strict'
    angular.module('myApp',[
        'ui.router',
        'api.users',
        'api.pokemon',
        'components.users',
        'components.profile',
        'components.missingno',
        'filters.capitalize'
    ])
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise("/");
    })

})();