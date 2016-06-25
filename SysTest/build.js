const Builder = require('systemjs-builder');


// optional constructor options
// sets the baseURL and loads the configuration file
let builder = new Builder('./');

// builder.buildStatic('module1.js', 'outfile.js');

builder.loadConfig("config.js");

builder
    .bundle('module1.js', 'outfile.js')
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });