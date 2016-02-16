'use strict';

angular.module('app.services', ['restangular']);
angular.module('app.controllers', ['app.services']);
angular.module('app', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'app.services',
    'app.directives',
    'app.controllers',
]).config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api.tnyu.org/v3');

    // Configuring Restangular to work with JSONAPI spec
    RestangularProvider.setDefaultHeaders({
        'Accept': 'application/vnd.api+json, application/*, */*',
        'Content-Type': 'application/vnd.api+json'
    });
    
    RestangularProvider.addResponseInterceptor(function(data) {
        return data;
    });
});