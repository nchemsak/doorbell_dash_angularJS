'use strict';
module.exports = function(grunt) {

  grunt.initConfig({


    jshint: {
      files: ['../app/**/*.js'], //this is the folder where all JS code should be located.
      //It looks for ANY file that ends in '.js' in the 'javascripts' folder
      options: {
        predef: ["document", "console", "$scope", "module", "require", ], //predefined
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true, "module": true, "require": true, "Global": true}, //put global variables here ex: {"Sandwich": true, "require": true}
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss' //if your scss files is named something different, you’ll have to change this path.
            //this creates a file called main.css FROM sass/styles.scss
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
  //now, just typing 'grunt' will run this and the watch task will take over.
};
