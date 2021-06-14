//- imports
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default () => {
    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'bundle.[contenthash].js',
        },
        resolve: {
            extensions: ['.js', '.scss', '.css', '.pug'],
            alias: {
                '@': resolve(__dirname, 'src'),
                '@styles': resolve(__dirname, 'src/scss'),
                '@styles-base': resolve(__dirname, 'src/scss/base'),
                '@styles-components': resolve(__dirname, 'src/scss/components'),
                '@styles-utils': resolve(__dirname, 'src/scss/utils'),
                '@layouts': resolve(__dirname, 'src/layouts'),
                '@assets-images': resolve(__dirname, 'src/assets/images'),
                '@assets-svg': resolve(__dirname, 'src/assets/svg'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(html)?$/,
                    loader: 'html-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/images/[hash][ext][query]',
                    },
                },
                {
                    test: /\.(svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/svg/[hash][ext][query]',
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[hash][ext][query]',
                    },
                },
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: resolve(__dirname, './src/views/home.pug'),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                attributes: {
                    rel: 'preload',
                },
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        },
    };
};