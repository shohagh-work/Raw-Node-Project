/*
 *
 * Title: User Handler
 * Description: Handler to handle user related routes
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 07/05/2023
 *
 */

// module scaffolding
const handle = {};

handle.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {

    } else {
        callback(405, {
            message: 'serverside error!',
        });
    }
};

// handle._user scaffolding
handle._user = {};

// for get method
handle._user.get = (requestProperties,callback) {
    
};

// export module
module.exports = handle;
