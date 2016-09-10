/*global module:false*/
'use strict';
module.exports = function(grunt) {


  var globalConfig = {
    baseSass: 'app/assets/sass',
    baseStyles: 'app/css'
  };
  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    logvar: {
      data: '<%= pkg.name %>'
    },
    bower: {
      install: {
        options: {
          targetDir: 'src/<%= pkg.name %>/libs',
          layout: 'byComponent',
          verbose: true,
          cleanup: true
        }
      }
    },
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
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
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            flatten: false,
            cwd: 'app/',
            src: ['*.html', 'css/**/*.css'],
            dest: 'dist/',
            filter: 'isFile'
          }, {
            expand: true,
            cwd: 'app/<%= pkg.name %>',
            src: '**/*.html',
            dest: 'dist/',
            filter: 'isFile'
          },
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'app/',
            src: ['libs/**/*'],
            dest: 'dist/'
          }
        ]
      }
    },
    clean: ["dist/"],
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true
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
        src: ['app/angular-example/**/*.js', '!app/libs/**/*', 'test/**/*.js']

      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    sass: {
      applyStyle: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= globalConfig.baseStyles %>/style.css': '<%= globalConfig.baseSass %>/style.scss'
        }
      }
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
    },
    ngdocs: {
      all: ['app/angular-example/**/*.js']
    }
  });

  // These plugins provide necessary tasks.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-ngdocs');

  // Default task.
  grunt.registerTask('deploy', ['clean', 'concat', 'copy', 'uglify', 'sass', 'ngdocs']);
  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('default', ['test', 'deploy']);

};
