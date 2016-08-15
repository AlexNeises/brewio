'use strict';

module.exports = function( grunt ) {
	require( 'load-grunt-tasks' )( grunt );
	require( 'time-grunt' )( grunt );

	var jsList = [
		'public/libs/bootstrap/js/bootstrap.min.js',
		'public/assets/js/core.js'
	];

	grunt.initConfig( {
		uglify: {
			options: {
				beautify: false,
				mangle: true,
				compress: true
			},
			dist: {
				files: {
					'public/assets/js/core.min.js': [ jsList ]
				}
			}
		},

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'public/assets/css/main.min.css': [ 'public/assets/sass/main.scss' ]
				}
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require( 'autoprefixer' )( {
						browsers: [ 'last 3 versions', 'last 2 iOS versions', 'last 1 Android version' ]
					} ),
					require( 'csswring' )
				]
			},
			dist: {
				src: 'public/assets/css/main.min.css'
			}
		},

		watch: {
			sass: {
				files: [
					'public/assets/sass/**/*.scss',
				],
				tasks: [ 'sass', 'postcss' ]
			},
			js: {
				files: [
					jsList
				],
				tasks: [
					'uglify'
				]
			}
		}
	} );

	grunt.registerTask( 'default', [
		'dev'
	] );

	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.task.renameTask( 'copy', 'generate' );
	grunt.registerTask( 'dev', [
		'watch'
	] );

	grunt.registerTask( 'build', [
		'uglify',
		'sass',
		'postcss'
	] );
};