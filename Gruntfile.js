
module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                    [ "babelify", { presets: ["es2015"] } ]
                ]
            },
            files: {
               "./www/dist/app.js": ["./www/src/app.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./modules/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   // load npm tasks
   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   // register tasks
   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};
