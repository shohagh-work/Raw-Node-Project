/*
 *
 * Title: Routes
 * Description: Application Routes
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 05/04/2023
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler');
const { checkHandler } = require('./handlers/routeHandlers/checkHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};

// export module
module.exports = routes;
