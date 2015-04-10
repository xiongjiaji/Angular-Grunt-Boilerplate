define([
  'angular',
  'angular-mocks',
  'angular-route',
  'angular-ui-bootstrap',
  'angular-ui-router',
  'main/home/controllers/HomeController',
  'main/manifest',
  'core/manifest',
  //'src/app',
  ], function(ng, ng_mock, ng_route, ng_ui_bootstrap, ng_ui_rooter, main, core){

    var app = ng.module('app',[
        'ngRoute',
        'ui.router',
        'ui.bootstrap',
        'CoreApp',
        'HeaderApp',
        'HomeApp'
    ]);

    ng.element(document).ready(function () {
        ng.bootstrap(document, ['app']);
    });

    describe('TestExample', function() {

      var scope, controller;

       beforeEach(inject(function($injector) {
        ng.module('HomeApp');
        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('HomeController', {
                '$scope': $scope
            });
        };
    }));

/*
        beforeEach(function(){
          ng.module('HomeApp', ['$stateProvider', '$urlRouterProvider']);

          inject(function($rootScope,$controller){
          scope = $rootScope.$new();
          controller = $controller;        
          
          controller('HomeController', {
                    '$scope': scope,
                });
        });
      } );
*/

        it("test01", function(){
          // var controller = createController();
          expect($scope.text).not.toBe('欢迎！');
          //expect($scope.getText()).toBe("Welcome on angular-base project");
        });
    });
});