angular.module( 'HopsCtrl', [ ] ).controller( 'HopsController', function( HopsFactory, $scope, $http ) {
	HopsFactory.getAll( ).then( function( result ) {
		$scope.hops = result.data.response;
	} );
	$scope.tagline = 'Hops go here!';
} );