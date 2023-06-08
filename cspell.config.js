const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        'public/examples/',
    ],
    words: [
        ...baseConfig.words,
        'toshimaru',
    ],
};
