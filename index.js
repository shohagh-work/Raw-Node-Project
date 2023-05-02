/*
 *
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');
// app object - module scaffolding
const app = {};

// testing file system
// @TODO: erase this code block later
data.create('test', 'newFile', { name: 'Mmh Shohagh', language: 'BN(BD)' }, (err) => {
    console.log('error was', err);
});

// create server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Environtment variable is ${environment.envName}`);
        console.log(`listening to port ${environment.port}`);
    });
};

// handle request response
// start the server
app.createServer();
