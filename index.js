'use strict';

const Hapi = require('@hapi/hapi');
var models = require('./models');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // routes
    server.route(require('./routes'));


    //models.sequelize.sync();
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
