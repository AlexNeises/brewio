angular.module( 'YeastsCtrl', [ ] ).controller( 'YeastsController', function( YeastsFactory, $scope, $http ) {
	YeastsFactory.getAll( ).then( function( result ) {
		$scope.yeasts = result.data.response;
	} );
	$scope.tagline = 'Yeasts go here!';
} );