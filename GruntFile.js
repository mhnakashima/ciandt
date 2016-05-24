module.exports = function(grunt){
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		
			dist:{
				src: [
					'js/angular.min.js',
					'js/jquery.min.js',
					'js/xml2json.js',
					'js/QuestionController.js'
				],
				dest: 'js/Main.js'
			}
		},
		
		uglify: {
			build: {
				src: 'js/Main.js',
				dest: 'js/Main.min.js'
			}
		},

		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
		
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-watch');
		
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
	
	grunt.registerTask('sassFiles', ['watch', 'sass']);		
	
	
}