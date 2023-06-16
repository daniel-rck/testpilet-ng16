const extendWebpack = require('piral-ng/extend-webpack');

module.exports = extendWebpack({
    ngOptions: {
        jitMode: true
    },
});
