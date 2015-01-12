// define angular routes

angular.module('appRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    //home page use MainController
    .when('/', {
      templateUrl: './public/views/index.html',
      controller: 'MainController'
    })
    .when('/home', {
      templateUrl: './public/views/home.html',
      controller: 'MainController'
    })
    .when('/imports', {
      templateUrl: './public/views/imports.html',
      controller: 'ImportController'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Model(true);
}]);