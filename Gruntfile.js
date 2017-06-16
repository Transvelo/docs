module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Clean grunt files
		clean: {
			files: '.grunt',
			bethlehem: 'gh-pages/bethlehem/',
			bewear: 'gh-pages/bewear/',
			electro: 'gh-pages/electro/',
			enter: 'gh-pages/enter/',
			mediacenter: 'gh-pages/mediacenter/',
			mybag: 'gh-pages/mybag/',
			pizzaro: 'gh-pages/pizzaro/',
			playhouse: 'gh-pages/playhouse/',
			sportexx: 'gh-pages/sportexx/',
			unicase: 'gh-pages/unicase/',
			techmarket: 'gh-pages/techmarket/',
		},

		// Copy documantation to gh-pages
		copy: {
			bethlehem: {
				files: [
					{ expand: true, cwd: 'gitbook/bethlehem/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/bethlehem/' }
				],
			},
			bewear: {
				files: [
					{ expand: true, cwd: 'gitbook/bewear/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/bewear/' }
				],
			},
			electro: {
				files: [
					{ expand: true, cwd: 'gitbook/electro/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/electro/' }
				],
			},
			enter: {
				files: [
					{ expand: true, cwd: 'gitbook/enter/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/enter/' }
				],
			},
			mediacenter: {
				files: [
					{ expand: true, cwd: 'gitbook/mediacenter/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/mediacenter/' }
				],
			},
			mybag: {
				files: [
					{ expand: true, cwd: 'gitbook/mybag/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/mybag/' }
				],
			},
			pizzaro: {
				files: [
					{ expand: true, cwd: 'gitbook/pizzaro/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/pizzaro/' }
				],
			},
			playhouse: {
				files: [
					{ expand: true, cwd: 'gitbook/playhouse/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/playhouse/' }
				],
			},
			sportexx: {
				files: [
					{ expand: true, cwd: 'gitbook/sportexx/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/sportexx/' }
				],
			},
			techmarket: {
				files: [
					{ expand: true, cwd: 'gitbook/techmarket/_book/', src: ['**','!.*','!.*/**','.htaccess','!Gruntfile.js','!README.md','!package.json','!node_modules/**','!.DS_Store','!npm-debug.log'], dest : 'gh-pages/techmarket/' }
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
			bewear: {
				input: 'gitbook/bewear',
				github: 'Transvelo/bewear'
			},
			electro: {
				input: 'gitbook/electro',
				github: 'Transvelo/electro'
			},
			enter: {
				input: 'gitbook/enter',
				github: 'Transvelo/enter'
			},
			mediacenter: {
				input: 'gitbook/mediacenter',
				github: 'Transvelo/mediacenter'
			},
			mybag: {
				input: 'gitbook/mybag',
				github: 'Transvelo/mybag'
			},
			pizzaro: {
				input: 'gitbook/pizzaro',
				github: 'Transvelo/pizzaro'
			},
			playhouse: {
				input: 'gitbook/playhouse',
				github: 'Transvelo/playhouse'
			},
			sportexx: {
				input: 'gitbook/sportexx',
				github: 'Transvelo/sportexx'
			},
			techmarket: {
				input: 'gitbook/techmarket',
				github: 'Transvelo/techmarket'
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
		'gitbook', 'clean', 'copy'
	]);

	grunt.registerTask( 'bethlehem', [
		'gitbook:bethlehem', 'clean:bethlehem', 'copy:bethlehem'
	]);

	grunt.registerTask( 'bewear', [
		'gitbook:bewear', 'clean:bewear', 'copy:bewear'
	]);

	grunt.registerTask( 'electro', [
		'gitbook:electro', 'clean:electro', 'copy:electro'
	]);

	grunt.registerTask( 'enter', [
		'gitbook:enter', 'clean:enter', 'copy:enter'
	]);
	grunt.registerTask( 'mediacenter', [
		'gitbook:mediacenter', 'clean:mediacenter', 'copy:mediacenter'
	]);

	grunt.registerTask( 'mybag', [
		'gitbook:mybag', 'clean:mybag', 'copy:mybag'
	]);

	grunt.registerTask( 'pizzaro', [
		'gitbook:pizzaro', 'clean:pizzaro', 'copy:pizzaro'
	]);

	grunt.registerTask( 'playhouse', [
		'gitbook:playhouse', 'clean:playhouse', 'copy:playhouse'
	]);

	grunt.registerTask( 'sportexx', [
		'gitbook:sportexx', 'clean:sportexx', 'copy:sportexx'
	]);

	grunt.registerTask( 'techmarket', [
		'gitbook:techmarket', 'clean:techmarket', 'copy:techmarket'
	]);

	grunt.registerTask( 'unicase', [
		'gitbook:unicase', 'clean:unicase', 'copy:unicase'
	]);

	grunt.registerTask( 'publish', [
		'gh-pages',
		'clean:files'
	]);
};
