const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const packageJson = require("./package.json");

module.exports = {
    watch: false,
    mode: "production",
    entry: {
        main : path.resolve(__dirname, "./assets/index.tsx")
    },
    output: {
        path : path.resolve(__dirname, '../web/src/main/resources/static/static'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.worker\.ts(x?)$/,
				use : {
                    loader: 'worker-loader',
                    options: { 
                        name: 'worker.js'
                    }
				}
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            }
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            base : {
                "href": "/static"
            },
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
        new webpack.DefinePlugin({
            'VERSION' : `'${packageJson.version}'`,
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        modules: ["assets", "node_modules"],
        alias : {
            "store": path.resolve(__dirname, "./assets/store"),
            "model": path.resolve(__dirname, "./assets/model"),
            "utility": path.resolve(__dirname, "./assets/utility"),
            "component": path.resolve(__dirname, "./assets/component"),
            "actions": path.resolve(__dirname, "./assets/store/actions"),
            "const": path.resolve(__dirname, "./assets/const")
        }
    },    
};