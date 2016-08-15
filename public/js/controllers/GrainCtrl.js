angular.module( 'GrainCtrl', [ ] ).controller( 'GrainController', function( GrainFactory, $scope, $http ) {
	GrainFactory.getAll( ).then( function( result ) {
		$scope.grain = result.data.response;
	} );
	$scope.tagline = 'Grain goes here!';
} );