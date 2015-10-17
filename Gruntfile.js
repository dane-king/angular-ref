/*global module:false*/
module.exports = function (grunt) {
    'use strict';

    var globalConfig = {
        baseSass  : 'src/assets/sass',
        baseStyles: 'src/app/css'
    };
    // Project configuration.
    grunt.initConfig({
        globalConfig: globalConfig,
        // Metadata.
        pkg         : grunt.file.readJSON('package.json'),
        logvar      : {
            data: '<%= pkg.name %>'
        },
        bower       : {
            install: {
                options: {
                    targetDir: 'src/app/libs',
                    layout   : 'byComponent',
                    verbose  : true,
                    cleanup  : true
                }
            }
        },
        banner      : '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat      : {
            options: {
                banner      : '<%= banner %>',
                stripBanners: true
            },
            dist   : {
                src : ['src/<%= pkg.name %>/**/*.js'],
                dest: 'dist/app.js'
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, flatten:true, src: ['src/*.html','src/<%= pkg.name %>/**/*.css'], dest: 'dist/', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    {expand: true,cwd: 'src/', src: ['libs/**/*'], dest: 'dist/'}
                    ]
            }
        },
        uglify      : {
            options: {
                banner: '<%= banner %>',
                sourceMap:true
            },
            dist   : {
                src : '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint      : {
            options  : {
                jshintrc: '.jshintrc',
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test : {
                src: ['src/angular-example/**/*.js', '!src/libs/**/*', 'test/**/*.js']

            }
        },
        karma       : {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        sass        : {
            applyStyle: {
                options: {
                    style    : 'compressed',
                    sourceMap: true
                },
                files  : {
                    '<%= globalConfig.baseStyles %>/style.css': '<%= globalConfig.baseSass %>/style.scss'
                }
            }
        },
        watch       : {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test : {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat','copy', 'uglify', 'sass', 'karma']);

};
