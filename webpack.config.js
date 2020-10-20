const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.jsx?/,
                use: {
                    loader: "bable-loader",

                }
            }
        ]
    }
};
