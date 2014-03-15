module.exports = function(grunt) {  
  grunt.loadNpmTasks("grunt-vows");
  grunt.initConfig({ 
    vows: {all:{
        options:{
            verbose: true
        },
        src: ["test/*.js"]
    }}
  });  
  // Default task.  
  grunt.registerTask('default', 'vows');  
};  
