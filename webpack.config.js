const webpack = require('webpack');

module.exports = {
    entry : './graficos/index.jsx',
    output:{
        __dirname:'/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8085,
        contentBase: './public'
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders:[
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query:{
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']

                }
            }
        ]
    }
}