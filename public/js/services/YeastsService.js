angular.module( 'YeastsService', [ ] ).factory( 'YeastsFactory', [ '$http', function( $http ) {

	return {
		getAll: function( ) {
			return $http.get( '/api/v1/yeasts' );
		}
	}
} ] );