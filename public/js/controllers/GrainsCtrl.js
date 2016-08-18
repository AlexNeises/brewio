angular.module( 'GrainsCtrl', [ ] ).controller( 'GrainsController', function( GrainsFactory, SrmFactory, $scope, $http ) {
	GrainsFactory.getAll( ).then( function( result ) {
		$scope.grains = result.data.response;
		angular.forEach( $scope.grains, function( value, key ) {
			SrmFactory.getOne( value.color ).then( function( color_result ) {
				if ( typeof color_result.data.response === 'undefined' ) {
					$scope.grains[ key ].hex = '#000000';
				}
				else {
					$scope.grains[ key ].hex = color_result.data.response[ 0 ].hex;
				}
			} );
		} );
	} );

	$scope.tagline = 'Grains go here!';

} ).filter( 'filterGrains', function( ) {
	return function( data_array, search_term ) {
		if ( ! data_array ) {
			return;
		}
		else if ( ! search_term ) {
			return data_array;
		}
		else {
			var term = search_term.toLowerCase( );
			return data_array.filter( function( item ) {
				var f_name = item.name.toString( ).toLowerCase( ).indexOf( term ) > -1;
				var f_origin = item.origin.toString( ).toLowerCase( ).indexOf( term ) > -1;
				return f_name || f_origin;
			} );
		}
	}
} );