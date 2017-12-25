/*
* File: nerd.js
* Description: Grabs the mongoose module
* Documentations: http://mongoosejs.com/docs/guide.html
*/

var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});
