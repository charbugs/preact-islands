const { resolve} = require('path')




module.exports = {
    entry: {
      'bundle': resolve(__dirname, 'src/islands/index.ts'),
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'build/public/js'),
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true,
            configFile: 'tsconfig.json',
            compilerOptions: {
              module: 'ES6',
            }
          }
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
  }

