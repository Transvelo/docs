module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Clean grunt files
		clean: {
			files: '.grunt'
		},

		// Copy documantation to gh-pages
		copy: {
			bethlehem: {
				files: [
					{ expand: true, cwd: 'gitbook/bethlehem/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/bethlehem/' }
				],
			},
			mediacenter: {
				files: [
					{ expand: true, cwd: 'gitbook/mediacenter/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/mediacenter/' }
				],
			},
			sportexx: {
				files: [
					{ expand: true, cwd: 'gitbook/sportexx/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/sportexx/' }
				],
			},
			unicase: {
				files: [
					{ expand: true, cwd: 'gitbook/unicase/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/unicase/' }
				],
			}
		},

		'gh-pages': {
			options: {
				base : 'gh-pages'
			},
			src: ['**']
		},

		gitbook: {
			bethlehem: {
				input: 'gitbook/bethlehem',
				github: 'Transvelo/bethlehem'
			},
			mediacenter: {
				input: 'gitbook/mediacenter',
				github: 'Transvelo/mediacenter'
			},
			sportexx: {
				input: 'gitbook/sportexx',
				github: 'Transvelo/sportexx'
			},
			unicase: {
				input: 'gitbook/unicase',
				github: 'Transvelo/unicase'
			}
		}

	});

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-gitbook' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	// Register tasks
	grunt.registerTask( 'default', [
		'gitbook', 'copy'
	]);

	grunt.registerTask( 'bethlehem', [
		'gitbook:bethlehem', 'copy:bethlehem'
	]);

	grunt.registerTask( 'mediacenter', [
		'gitbook:mediacenter', 'copy:mediacenter'
	]);

	grunt.registerTask( 'sportexx', [
		'gitbook:sportexx', 'copy:sportexx'
	]);

	grunt.registerTask( 'unicase', [
		'gitbook:unicase', 'copy:unicase'
	]);

	grunt.registerTask( 'publish', [
		'gh-pages',
		'clean'
	]);
};
