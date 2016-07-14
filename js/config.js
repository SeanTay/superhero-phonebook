angular.
  module('heroes').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/heroes', {
          template: '<hero-list></hero-list>'
        }).
        when('/heroes/:heroID', {
          template: '<hero-detail></hero-detail>'
        }).
        otherwise('/heroes');
    }
  ]);
