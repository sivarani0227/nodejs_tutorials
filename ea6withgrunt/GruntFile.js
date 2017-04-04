module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	"babel" : {

  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				"dist/app.js" : "src/app.js",
  				"dist/rectange.js" : "src/rectange.js",
  			}
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);
}