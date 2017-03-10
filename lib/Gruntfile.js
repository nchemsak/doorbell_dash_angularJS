'use strict';
module.exports = function(grunt) {

  grunt.initConfig({


    jshint: {
      files: ['../app/**/*.js'], //this is the folder where all JS code should be located.
      options: {
        predef: ["document", "console", "$scope", "module", "require", "Chart",], //predefined
        esnext: true,
        globalstrict: true,
        globals: { "angular": true, "app": true, "module": true, "require": true, "Global": true, "Chart": true},
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
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
};
