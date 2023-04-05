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
const {StringDecoder} = require('string_decoder');

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
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('hello world');
    })
    
};

// export module
module.exports = handler;
