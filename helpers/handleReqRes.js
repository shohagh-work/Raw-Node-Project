/*
 *
 * Title: Handler Request Response
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// handle - module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8');

    // request property
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    let realData = '';

    // find route
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    // chosenHandler call
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        // res.end('hello world');
    });
};

// export module
module.exports = handler;
