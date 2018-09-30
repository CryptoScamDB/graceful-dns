import * as path from 'path';
import { Configuration } from 'webpack';
import * as nodeExternals from 'webpack-node-externals';

const isDevelopment = process.env.NODE_ENV !== 'production';
const sourcePath = path.resolve(__dirname, 'src');

const config: Configuration = {
  mode: isDevelopment ? 'development': 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'graceful-dns': path.resolve(sourcePath, 'index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'graceful-dns',
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              useBabel: true,
              babelCore: '@babel/core'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
};

export default config;
