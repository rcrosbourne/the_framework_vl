'use strict';

angular.module('theFrameworkVlApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
]).config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        //States
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                authenticate: false
            })
            .state('home',{
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                authenticate: true
            })
    }
 ]).run(function($rootScope,$state){
        $rootScope.$on('$stateChangeStart', function(event,curr, prev){
            if(curr.authenticate && !amplify.store('currentUser')){
                $state.transitionTo('login');
                event.preventDefault();
            }
        })
    });

//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/login.html',
//        controller: 'LoginController'
//      })
//      .when('/home', {
//            templateUrl: 'views/home.html',
//            controller: 'HomeController'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
