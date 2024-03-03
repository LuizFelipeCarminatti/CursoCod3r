const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = { 
    mode: modoDev ? 'development' : 'production',
    entry: { main: './src/principal.js'},
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static:{
            directory: path.join(__dirname, './public')
        },
        compress: true,
        port: 9000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({ //minificar js
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new CssMinimizerPlugin({}) //minificar os arquivos
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css' // arquivo a ser gerado
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader, //extrai arquivo css
                //'style-loader', // Adiciona a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
            }, {
                test:/\.(png|svg|jpg|gif)$/,
                use: ['file-loader'] //carrega as imagens
            }]
    }
}