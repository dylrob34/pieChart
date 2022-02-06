const path = require("path");
const bundleOutputDir = "./build";

module.exports = {
    entry: {
        main: "./src/PieChart.tsx"  
    },
    output: {
        filename: "PieChart.js",
        path: path.join(__dirname, bundleOutputDir),
        publicPath: 'public/'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules/']
            },            
            { test: /\.tsx?$/, loader: "ts-loader"},        
            {
                test: /\.css$/,
                sideEffects: true,
                loader: "css-loader"
            }
        ]
    }
};
