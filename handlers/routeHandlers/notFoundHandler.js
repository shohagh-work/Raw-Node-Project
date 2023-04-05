/*
 *
 * Title: Not Found Handler
 * Description: 404 | Not Found Handler
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// module scaffolding
const handle = {};

handle.notFoundHandler = (requestProperties, callback) => {
    console.log('Not Found');

    callback(404, {
        message: 'Your requested url is not found',
    });
};

// export module
module.exports = handle;
