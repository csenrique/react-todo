const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new  HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    entry: "./app/index.jsx",
    output: {
        path:__dirname + "/dist",
        filename: 'bundle.js'
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react", "@babel/preset-env"]
            }
        }
        ]    
    },

    //path resolve
    resolve: {
        extensions: ['.js', '.jsx']
    },

    //Enviromen Mode
    mode: process.env.NODE_ENV || 'development',

    //Plugins
    plugins: [HtmlWebpackPluginConfig],

    //devtool
    devtool: 'source-map',

    //dev server entry point
    // devServer: {
    //     static: {
    //         dierctory: __dirname + "/src"
    //     },

    //     port: 3000,

    //     devMiddleware: {
    //         publicPath: 'http://localhost:3000'
    //     },
    //     hot: 'only'
    // } 
};