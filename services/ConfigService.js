const Config = require('../objects/Config');

const ConfigService = function (site, driver, animationTimeTimeout = 5000) {
    const config = new Config(site, driver);

    this.disableDebugbar = function () {
        config.disableDebugbar();
    };
    this.disableCookies = function () {
        config.disableCookies();
    };

};

module.exports = ConfigService;