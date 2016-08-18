angular.module( 'HopsService', [ ] ).factory( 'HopsFactory', [ '$http', function( $http ) {

	return {
		getAll: function( ) {
			return $http.get( '/api/v1/hops' );
		}
	}
} ] );