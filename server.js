var express			= require( 'express' );
var config			= require( './config' );
var app				= express( );
var bodyParser		= require( 'body-parser' );
var methodOverride	= require( 'method-override' );
var mysql			= require( 'mysql' );

var pool			= mysql.createPool( {
	connectionLimit	: config.mysql.limit,
	host			: config.mysql.host,
	user			: config.mysql.user,
	password		: config.mysql.pass,
	database		: config.mysql.db,
	debug			: config.mysql.debug
} );



app.use( bodyParser.urlencoded( {
	extended: true
} ) );
app.use( bodyParser.json( ) );

var port = config.port;

var router = express.Router( );


router.get( '/grains', function( req, res ) {
	pool.getConnection( function( err, connection ) {
		if ( err ) {
			connection.release( );
			console.log( err );
			res.status( 500 );
			res.json( {
				'code': 500,
				'status': 'Internal Server Error'
			} );
		}
		else {
			console.log( 'Connected as ID ' + connection.threadId );
			connection.query( 'SELECT * FROM `grains` WHERE 1', function( err, rows ) {
				connection.release( );
				if ( err ) {
					console.log( err );
					res.status( 500 );
					res.json( {
						'code': 500,
						'status': 'Internal Server Error'
					} );
				}
				else {
					if ( rows.length > 0 ) {
						res.status( 200 );
						res.json( {
							'code': 200,
							'status': 'OK',
							'response': rows
						} );
					}
					else {
						res.status( 204 );
						res.json( {
							'code': 204,
							'status': 'No Content'
						} );
					}
				}
			} );
		}
	} );
} );

router.get( '/grains/:id', function( req, res ) {
	pool.getConnection( function( err, connection ) {
		if ( err ) {
			connection.release( );
			console.log( err );
			res.status( 500 );
			res.json( {
				'code': 500,
				'status': 'Internal Server Error'
			} );
		}
		else {
			console.log( 'Connected as ID ' + connection.threadId );
			connection.query( 'SELECT * FROM `grains` WHERE `id` = ' + req.params.id, function( err, rows ) {
				connection.release( );
				if ( err ) {
					console.log( err );
					res.status( 500 );
					res.json( {
						'code': 500,
						'status': 'Internal Server Error'
					} );
				}
				else {
					if ( rows.length > 0 ) {
						res.status( 200 );
						res.json( {
							'code': 200,
							'status': 'OK',
							'response': rows
						} );
					}
					else {
						res.status( 204 );
						res.json( {
							'code': 204,
							'status': 'No Content'
						} );
					}
				}
			} );
		}
	} );
} );


router.get( '/hops', function( req, res ) {
	pool.getConnection( function( err, connection ) {
		if ( err ) {
			connection.release( );
			console.log( err );
			res.status( 500 );
			res.json( {
				'code': 500,
				'status': 'Internal Server Error'
			} );
		}
		else {
			console.log( 'Connected as ID ' + connection.threadId );
			connection.query( 'SELECT * FROM `hops` WHERE 1', function( err, rows ) {
				connection.release( );
				if ( err ) {
					console.log( err );
					res.status( 500 );
					res.json( {
						'code': 500,
						'status': 'Internal Server Error'
					} );
				}
				else {
					if ( rows.length > 0 ) {
						res.status( 200 );
						res.json( {
							'code': 200,
							'status': 'OK',
							'response': rows
						} );
					}
					else {
						res.status( 204 );
						res.json( {
							'code': 204,
							'status': 'No Content'
						} );
					}
				}
			} );
		}
	} );
} );

router.get( '/hops/:id', function( req, res ) {
	pool.getConnection( function( err, connection ) {
		if ( err ) {
			connection.release( );
			console.log( err );
			res.status( 500 );
			res.json( {
				'code': 500,
				'status': 'Internal Server Error'
			} );
		}
		else {
			console.log( 'Connected as ID ' + connection.threadId );
			connection.query( 'SELECT * FROM `hops` WHERE `id` = ' + req.params.id, function( err, rows ) {
				connection.release( );
				if ( err ) {
					console.log( err );
					res.status( 500 );
					res.json( {
						'code': 500,
						'status': 'Internal Server Error'
					} );
				}
				else {
					if ( rows.length > 0 ) {
						res.status( 200 );
						res.json( {
							'code': 200,
							'status': 'OK',
							'response': rows
						} );
					}
					else {
						res.status( 204 );
						res.json( {
							'code': 204,
							'status': 'No Content'
						} );
					}
				}
			} );
		}
	} );
} );


router.get( '/hopsubs/:id', function( req, res ) {
	pool.getConnection( function( err, connection ) {
		if ( err ) {
			connection.release( );
			console.log( err );
			res.status( 500 );
			res.json( {
				'code': 500,
				'status': 'Internal Server Error'
			} );
		}
		else {
			console.log( 'Connected as ID ' + connection.threadId );
			connection.query( 'SELECT * FROM `hops` WHERE `id` IN (SELECT `substitution` FROM `hop_substitution` WHERE `hop` = ' + req.params.id + ')', function( err, rows ) {
				connection.release( );
				if ( err ) {
					console.log( err );
					res.status( 500 );
					res.json( {
						'code': 500,
						'status': 'Internal Server Error'
					} );
				}
				else {
					if ( rows.length > 0 ) {
						res.status( 200 );
						res.json( {
							'code': 200,
							'status': 'OK',
							'response': rows
						} );
					}
					else {
						res.status( 204 );
						res.json( {
							'code': 204,
							'status': 'No Content'
						} );
					}
				}
			} );
		}
	} );
} );

app.use( '/api/v1', router );

app.get( '*', function( req, res ) {
	res.sendFile( __dirname + '/public/views/index.html' );
} );

app.listen( port );
console.log( 'Aaaaaaaaand we\'re off to port ' + port + '!' );
