const path = require("path");

module.exports = {
    watch: true,
    mode: "development",
    entry: {
        main : path.resolve(__dirname, "./assets/index.tsx")
    },
    devtool: "source-map",
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
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".scss"],
        modules: ["assets", "node_modules"],
        alias : {}
    }
}