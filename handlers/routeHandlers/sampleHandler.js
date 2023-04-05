/*
 *
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// module scaffolding
const handle = {};

handle.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

// export module
module.exports = handle;
