/*
* File: app/routes.js
* Description: Grabs the model made in /app/model/*.js
*/

// Grabs the nerd model
var Nerd = require('../models/nerd'),
    controller = require("../controllers/controller");

module.exports = function(app) {

    app.get('/api/nerds', controller.get);

    app.post('/api/nerds', controller.post);

    app.put('/api/nerds', controller.put);

    app.delete('/api/nerds', controller.delete);

    app.get('*', controller.default);
}
