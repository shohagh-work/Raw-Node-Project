/*
 *
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 18/04/2023
 *
 */

// dependencies

// module scaffolding
const environments = {};

// starting environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'asdfghjkl',
    maxChecks: 5,
    twilio: {
        fromPhone: '+12184299618',
        accountSid: 'AC7f6d6a3c5fe4f3b2811a41f5ce361d3d',
        authToken: 'e9d322c9324ddeda4308e7b9c548c604',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'qwertyasdfghjkl',
    maxChecks: 5,
    twilio: {
        fromPhone: '+12184299618',
        accountSid: 'AC7f6d6a3c5fe4f3b2811a41f5ce361d3d',
        authToken: 'e9d322c9324ddeda4308e7b9c548c604',
    },
};

// determine which environment was passed
const currentEnvironment =    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentExport =    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentExport;
