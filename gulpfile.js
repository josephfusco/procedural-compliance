/**
 * Gulpfile for USWDS compilation
 * Uses @uswds/compile for official USWDS build process
 */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */
uswds.settings.version = 3;

/**
 * Path settings
 * https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#step-3-create-a-gulpfile
 */
uswds.paths.dist.css = './docs';
uswds.paths.dist.theme = './src/sass';
uswds.paths.dist.img = './docs/img';
uswds.paths.dist.fonts = './docs/fonts';
uswds.paths.dist.js = './docs/js';

/**
 * Exports
 */
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.default = uswds.watch;
