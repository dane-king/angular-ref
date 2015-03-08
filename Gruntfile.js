/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  var globalConfig = {
    baseSass: 'src/assets/sass',
    baseStyles: 'src/assets/css'
  };
  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      app: {
        files: {
          'dist/app.js': ['src/app/*.js']
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: 'vendor/bower_components',
          layout: 'byComponent',
          verbose: true,
          cleanup: true
        }
      }
    },
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>/**/*.js'],
        dest: 'dist/<%= pkg.name %>/app.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    },
    sass: {
      applyStyle: {
        options: {
          style: 'compressed',
          sourceMap: true
        },
        files: {
          '<%= globalConfig.baseStyles %>/style.css': '<%= globalConfig.baseSass %>/style.scss'
        }
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest', 'concat', 'uglify', 'sass']);

};