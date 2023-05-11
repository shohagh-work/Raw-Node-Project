/*
 *
 * Title: Environment
 * Description: Handle all environment related things
 * Author: Mmh Shohagh( From SHOHAGH STUDIO )
 * Date: 18/04/2023
 *
 */

// dependencies

// module scaffolding
const environment = {};

// starting environment
environment.staging = {
    port: 3000,
    envName: 'staging',
};

environment.production = {
    port: 5000,
    envName: 'production',
};

// determine which environment was passed
const currentEnvironment =    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentExport =    typeof environment[currentEnvironment] === 'object'
        ? environment[currentEnvironment]
        : environment.staging;

// export module
module.exports = environmentExport;
