/* jshint node:true */
module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		// Minify .js files.
		uglify: {
			options: {
				preserveComments: 'some'
			},
			main: {
				files: [{
					expand: true,
					cwd: 'src/themes/mediacenter/assets/js/',
					src: [
						'*.js',
						'!*.min.js'
					],
					dest: 'src/themes/mediacenter/assets/js/',
					ext: '.min.js'
				}]
			}
		},

		// Minify all .css files.
		cssmin: {
			minify: {
				files: [{
					expand: true,
					cwd: 'src/themes/mediacenter/',
					src: ['style.css','rtl.css'],
					dest: 'src/themes/mediacenter/',
					ext: '.min.css'
				}]
			}
		},

		checktextdomain: {
			options:{
				text_domain: 'mediacenter',
				keywords: [
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'esc_html__:1,2d',
					'esc_html_e:1,2d',
					'esc_html_x:1,2c,3d',
					'esc_attr__:1,2d',
					'esc_attr_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d'
				]
			},
			theme: {
				src:  [
					'src/themes/mediacenter/**/*.php', // Include all files
					'!node_modules/**' // Exclude node_modules/
				],
				expand: true
			},
			plugin: {
				options: {
					text_domain: 'mc-ext'
				},
				src: [
					'src/plugins/media-center-extensions/**/*.php',
					'!node_modules/**' // Exclude node_modules/
				],
				expand: true
			}
		},

		sass: {
			options: {
				sourcemap: 'none',
				includePaths: require( 'node-bourbon' ).includePaths
			},
			compileCore: {
				src: 'src/themes/mediacenter/assets/sass/style.scss',
				dest: 'src/themes/mediacenter/style.css'
			},
			compileRTL: {
				src: 'src/themes/mediacenter/assets/sass/rtl.scss',
				dest: 'src/themes/mediacenter/rtl.css'
			},
			compileColors: {
				files: {
					'src/themes/mediacenter/assets/css/blue.css': 'src/themes/mediacenter/assets/sass/colors/blue.scss',
					'src/themes/mediacenter/assets/css/dark-green.css': 'src/themes/mediacenter/assets/sass/colors/dark-green.scss',
					'src/themes/mediacenter/assets/css/green.css': 'src/themes/mediacenter/assets/sass/colors/green.scss',
					'src/themes/mediacenter/assets/css/navy.css': 'src/themes/mediacenter/assets/sass/colors/navy.scss',
					'src/themes/mediacenter/assets/css/orange.css': 'src/themes/mediacenter/assets/sass/colors/orange.scss',
					'src/themes/mediacenter/assets/css/red.css': 'src/themes/mediacenter/assets/sass/colors/red.scss'
				}
			}
		},

		// Generate POT files.
		makepot: {
			options: {
				potHeaders: {
					'report-msgid-bugs-to': 'http://transvelo.freshdesk.com/',
					'language-team': 'MediaCenter POT <mediacenter@transvelo.com>'
				}
			},
			frontend: {
				options: {
					type: 'wp-theme',
					cwd: 'src/themes/mediacenter/',
					domainPath: 'languages',
					potFilename: 'mediacenter.pot',
					processPot: function ( pot ) {
						pot.headers['project-id-version'];
						return pot;
					}
				}
			},
			plugins: {
				options: {
					type: 'wp-plugin',
					cwd: 'src/plugins/media-center-extensions/',
					domainPath: 'languages',
					potFilename: 'mc-ext.pot',
					processPot: function ( pot ) {
						pot.headers['project-id-version'];
						return pot;
					}
				}
			}
		},

		version: {
	    	mc_extensions: {
	    		options: {
	    			prefix: 'Version\\:\\s'
	    		},
	    		src: [ 'src/plugins/media-center-extensions/media-center-extensions.php' ]
	    	},
	    	sass: {
	    		options: {
	    			prefix: 'Version:\\s*\\s'
	    		},
	    		src: [
	    			'src/themes/mediacenter/assets/sass/style.scss',
	    			'src/themes/mediacenter/assets/sass/rtl.scss',
	    		]
	    	},
	    	mediacenter_child: {
	    		options: {
	    			prefix: 'Version:\\s*\\s'
	    		},
	    		src: [
	    			'src/themes/mediacenter-child/style.css'
	    		]
	    	}
	    },

	    // Clean previous deployed files
		clean: {
			dist: [
				'mediacente*.zip',
			],
			files: '.grunt'
		},

	    // make a zipfile
		compress: {
			main: {
				options: {
					archive: 'mediacenter.zip'
				},
				cwd: 'src/themes/',
				expand: true,
				src: [
					'mediacenter/**',
					'!mediacenter/.*',
					'!mediacenter/.*/**',
				]
			},

			child: {
				options: {
					archive: 'mediacenter-child.zip'
				},
				cwd: 'src/themes/',
				expand: true,
				src: [
					'mediacenter-child/**',
					'!mediacenter-child/.*',
					'!mediacenter-child/.*/**',
				]
			},

			plugin: {
				options: {
					archive: 'media-center-extensions.zip'
				},
				cwd: 'src/plugins/',
				expand: true,
				src: [
					'media-center-extensions/**',
					'!media-center-extensions/.*',
					'!media-center-extensions/.*/**',
				]
			},

			build: {
				options: {
					archive: 'mediacenter-v<%= pkg.version %>.zip'
				},
				cwd : 'dist/',
				expand: true,
				src: [
					'**',
					'!.*',
					'!.*/**'
				]
			}
		},

		copy: {
			main: {
				files: [
					{ src: ['media-center-extensions.zip'], dest: 'src/themes/mediacenter/assets/plugins/'}
				]
			},
			deploy: {
				files: [
					{ src: ['mediacenter.zip'], dest: 'dist/theme-files/'},
					{ src: ['mediacenter-child.zip'], dest: 'dist/theme-files/'},
				]
			},
			docs: {
				files: [
					{ expand: true, cwd: 'docs/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/docs/' }
				],
			},
			changelog: {
				files: [
					{ expand: true, cwd: 'dist/', src: ['changelog.txt'], dest: 'gh-pages/'}
				]
			}
		},

		'gh-pages': {
			options: {
				base : 'gh-pages'
			},
			src: ['**']
		},

		gitbook: {
			development: {
				input: 'docs',
				github: 'Transvelo/mediacenter'
			}
		}
	});

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-checktextdomain' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-critical-css' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );
	grunt.loadNpmTasks( 'grunt-gitbook' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	// Register tasks
	grunt.registerTask( 'default', [
		'sass',
		'uglify',
		'cssmin'
	]);

	grunt.registerTask( 'publishdocs', [
		'gitbook',
		'copy:docs',
		'copy:changelog',
		'gh-pages',
		'clean:files'
	]);

	grunt.registerTask( 'publish', [
		'gh-pages',
		'clean:files'
	]);

	grunt.registerTask( 'build', [
		'compress:plugin', 'copy:main', 'compress:main', 'compress:child', 'copy:deploy', 'compress:build'
	]);
};