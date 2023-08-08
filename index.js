/*
 *
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;

// dependencies
// const http = require('http');
// const { handleReqRes } = require('./helpers/handleReqRes');
// const environment = require('./helpers/environments');
// const { sendTwilioSms } = require('./helpers/notifications');
// const data = require('../../lib/data');
// app object - module scaffolding
// const app = {};

// @TODO remove later
// sendTwilioSms('01885780820', 'Hello Shakil Vhai', (err) => {
//     console.log('this is the error', err);
// });
// testing file system
// @TODO: erase this code block later
// write file
/* data.create('test', 'newFile', { name: 'Mmh Shohagh', language: 'BN(BD)' }, (err) => {
    console.log('error was', err);
}); */

// read file
/* data.read('test', 'newFile', (err, result) => {
    console.log(err, result);
}); */

// update file
/* data.update(
    'test',
    'newFile',
    { name: 'Mmh Shohagh', language: 'BN(BD)', country: 'Bangladesh' },
    (err) => {
        console.log(err);
    }
); */

// delete file
/* data.delete('test', 'newFile', (err) => {
    console.log(err);
}); */
// create server
// app.createServer = () => {
//     const server = http.createServer(handleReqRes);
//     server.listen(environment.port, () => {
//         console.log(`Environtment variable is ${environment.envName}`);
//         console.log(`listening to port ${environment.port}`);
//     });
// };

// handle request response
// start the server
// app.createServer();
