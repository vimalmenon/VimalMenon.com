const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const packageJson = require("./package.json");

module.exports = {
    watch: true,
    mode: "development",
    entry: {
        main : path.resolve(__dirname, "./assets/index.tsx")
    },
    devtool: "source-map",
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, "/public"),
        inline: true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                 target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 8081
                },
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
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
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
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
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
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
    }
}