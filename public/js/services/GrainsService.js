angular.module( 'GrainsService', [ ] ).factory( 'GrainsFactory', [ '$http', function( $http ) {

	return {
		getAll: function( ) {
			return $http.get( '/api/v1/grains' );
		}
	}
} ] );