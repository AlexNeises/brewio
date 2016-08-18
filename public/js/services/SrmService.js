angular.module( 'SrmService', [ ] ).factory( 'SrmFactory', [ '$http', function( $http ) {

	return {
		getAll: function( ) {
			return $http.get( '/api/v1/srm' );
		},

		getOne: function( id ) {
			return $http.get( '/api/v1/srm/' + id );
		}
	}
} ] );