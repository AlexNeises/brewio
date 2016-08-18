angular.module( 'appRoutes', [ ] ).config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
	
	$routeProvider
		
		.when( '/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		} )

		.when( '/grains', {
			templateUrl: 'views/grains.html',
			controller: 'GrainsController'
		} )

		.when( '/hops', {
			templateUrl: 'views/hops.html',
			controller: 'HopsController'
		} )

		.when( '/yeasts', {
			templateUrl: 'views/yeasts.html',
			controller: 'YeastsController'
		} )

		.otherwise( {
			redirectTo: '/'
		} );

	$locationProvider.html5Mode( true );

} ] );