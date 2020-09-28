const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        }
    },
    module: {
        rules: [
            /*{
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
            },*/
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
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Application Title",
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        modules: ["assets", "node_modules"],
        alias : {}
    }
}