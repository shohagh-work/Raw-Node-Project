/* eslint-disable no-underscore-dangle */
/*
 *
 * Title: User Handler
 * Description: Handler to handle user related routes
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 07/05/2023
 *
 */

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

// handle._user scaffolding
handler._users = {};

// for get method
handler._users.post = (requestProperties, callback) => {
    callback(405, {
        message: 'serverside error',
    });
};
handler._users.get = (requestProperties, callback) => {
    callback(200, {});
};
// handler._users.put = (requestProperties, callback) => {};
// handler._users.delete = (requestProperties, callback) => {};

// export module
module.exports = handler;
