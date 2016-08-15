angular.module( 'GrainService', [ ] ).factory( 'GrainFactory', [ '$http', function( $http ) {

	return {
		getAll: function( ) {
			return $http.get( '/api/v1/grains' );
		}
	}
} ] );