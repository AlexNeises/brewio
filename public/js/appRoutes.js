angular.module( 'appRoutes', [ ] ).config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
	
	$routeProvider
		
		.when( '/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		} )

		.when( '/grain', {
			templateUrl: 'views/grain.html',
			controller: 'GrainController'
		} );

	$locationProvider.html5Mode( true );

} ] );