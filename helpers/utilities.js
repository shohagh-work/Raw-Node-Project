/*
 *
 * Title: Utilities
 * Description: Important utility functions
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 7/05/2023
 *
 */

// dependencies

// module scaffolding
const utilities = {};

// parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.stringify(jsonString);
    } catch {
        output = {};
    }
    return output;
};

// export module
module.exports = utilities;
