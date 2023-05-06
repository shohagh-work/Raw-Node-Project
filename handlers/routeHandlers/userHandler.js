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
        callback(200, {
            message: 'This is a user url',
        });
    }
};

// export module
module.exports = handle;
