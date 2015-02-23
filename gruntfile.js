/**
 * Created by marnel on 5/14/14.
 */

config = {};
module.exports = function(grunt){
    config.commitMsg = grunt.option('commitMsg') || 'Site Updates';
    config.gitRepo = "StaticSite/marnel.github.io/";
    grunt.initConfig({
        shell: {
            clean: {
                command: 'hexo clean'
            },
            generate: {
                command: 'hexo generate'
            },
            server: {
                command: 'hexo server -d'
            }
        },
        watch: {
            js: {
                files: [
                    'work/js/**/*.js'
                ],
                tasks: [
                    //'jshint:work',
                    //'browserify2'
                ]
            }
        },
        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.cache.${ext}',
                renameFiles: true
            },
            css: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            js: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            images: {
                options: {
                },
                src: [
                    'build/**/*.png',
                    'build/**/*.jpg'
                ],
                dest: [
                    'build/**/*.html',
                    'build/**/*.js',
                    'build/**/*.css',
                    'build/**/*.md'
                ]
            }
        },
        copy: {
            pushStaticSite: {
                files: [{
                    cwd: "public/",
                    src: "**",
                    dest: "StaticSite/marnel.github.io/",
                    expand: true
                }]
            }
        },
        gitcheckout: {
            task: {
                options: {
                    branch: 'master',
                    create: false,
                    cwd: config.gitRepo
                }
            }
        },
        gitadd: {
            task: {
                options: {
                    cwd: config.gitRepo,
                    all: true
                }
            }
        },
        gitcommit: {
            task: {
                options: {
                    cwd: config.gitRepo,
                    message: config.commitMsg,
                    force: true,
                    verbose: true
                }
            }
        },
        gitpush: {
            task: {
                options: {
                    cwd: config.gitRepo,
                    branch: 'master',
                    remote: 'origin'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-line-remover');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-git");


    grunt.registerTask("dev", ["shell:clean", "shell:generate", "shell:server"]);
    grunt.registerTask("dist", ["shell:clean", "shell:generate", "gitcheckout", "copy:pushStaticSite", "gitadd", "gitcommit", "gitpush"]);
    grunt.registerTask("default", ["dev"]);
};