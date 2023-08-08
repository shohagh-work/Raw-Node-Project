/*
 *
 * Title: Server library
 * Description: Server related files
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 08/08/2023
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');
const environment = require('../helpers/environments');

// server object - module scaffolding
const server = {};

// create server
server.createServer = () => {
    const serverVariable = http.createServer(handleReqRes);
    serverVariable.listen(environment.port, () => {
        console.log(`Environtment variable is ${environment.envName}`);
        console.log(`listening to port ${environment.port}`);
    });
};

// handle request response

// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;
