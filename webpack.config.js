const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/dist/',
        filename: "bundle.js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['*','.js', '.jsx']
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                use: ['babel-loader'],   // определяем загрузчик
            },
            {
                test: /\.scss$/, 
                exclude: /(node_modules)/, 
                use: ['style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }, 'postcss-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: 'dist/app.css', allChunks: true})
    ]
}