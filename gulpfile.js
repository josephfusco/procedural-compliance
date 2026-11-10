const uswds = require("@uswds/compile");

uswds.settings.version = 3;

uswds.paths.dist.css = "./docs";
uswds.paths.dist.theme = "./src/sass";
uswds.paths.dist.fonts = "./docs/assets/fonts";
uswds.paths.dist.img = "./docs/assets/img";
uswds.paths.dist.js = "./docs/assets/js";

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.copyAssets = uswds.copyAssets;
exports.default = uswds.watch;
