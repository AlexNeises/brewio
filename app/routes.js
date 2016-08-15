var mysql	= require( 'mysql' );
var config	= require( '../config/db' );
var path	= require( 'path' );

module.exports = function( app ) {

	var pool			= mysql.createPool( {
		connectionLimit	: config.mysql.limit,
		host			: config.mysql.host,
		user			: config.mysql.user,
		password		: config.mysql.pass,
		database		: config.mysql.db,
		debug			: config.mysql.debug
	} );

	app.get( '/api/v1/grains', function( req, res ) {
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

	app.get( '/api/v1/grains/:id', function( req, res ) {
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


	app.get( '/api/v1/hops', function( req, res ) {
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

	app.get( '/api/v1/hops/:id', function( req, res ) {
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


	app.get( '/api/v1/hopsubs/:id', function( req, res ) {
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


	app.get( '/api/v1/srm', function( req, res ) {
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
				connection.query( 'SELECT * FROM `srm` WHERE 1', function( err, rows ) {
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

	app.get( '/api/v1/srm/:id', function( req, res ) {
		if ( req.params.id % 1 != 0 ) {
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
					connection.query( 'SELECT * FROM `srm` WHERE `srm` IN (' + Math.floor( req.params.id ) + ', ' + Math.ceil( req.params.id ) + ' )', function( err, rows ) {
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
							if ( rows.length == 2 ) {
								var color1 = rows[0].hex.replace( /#/g, '' );
								var color2 = rows[1].hex.replace( /#/g, '' );
								var ratio = req.params.id % 1;
								
								var hex = function( x ) {
									x = x.toString( 16 );
									return ( x.length == 1 ) ? '0' + x : x;
								};

								var r = Math.ceil( parseInt( color1.substring( 0, 2 ), 16 ) * ratio + parseInt( color2.substring( 0, 2 ), 16 ) * ( 1 - ratio ) );
								var g = Math.ceil( parseInt( color1.substring( 2, 4 ), 16 ) * ratio + parseInt( color2.substring( 2, 4 ), 16 ) * ( 1 - ratio ) );
								var b = Math.ceil( parseInt( color1.substring( 4, 6 ), 16 ) * ratio + parseInt( color2.substring( 4, 6 ), 16 ) * ( 1 - ratio ) );

								var middle = '#' + hex( r ).toUpperCase( ) + hex( g ).toUpperCase( ) + hex( b ).toUpperCase( );

								res.status( 200 );
								res.json( {
									'code': 200,
									'status': 'OK',
									'response': [ {
										'srm': req.params.id,
										'hex': middle
									} ]
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
		}
		else {
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
					connection.query( 'SELECT * FROM `srm` WHERE `srm` = ' + req.params.id, function( err, rows ) {
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
		}
	} );

	app.get( '*', function( req, res ) {
		res.sendFile( path.resolve( __dirname, '../public/index.html' ) );
	} );
}