
    // Work around for https://github.com/angular/angular-cli/issues/7200

    const path = require('path');
    const webpack = require('webpack');

    module.exports = {
      entry: {
        server: './server.ts',
      },
      target: 'node',
      resolve: { extensions: ['.ts', '.js'] },
      // this makes sure we include node_modules and other 3rd party libraries
      externals: [/(node_modules|main\..*\.js)/,],
      output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist/boutbitn'),
        filename: '[name].js'
      },
      module: {
        rules: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
      optimization: {
        minimize: false
      },
      plugins: [
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for 'WARNING Critical dependency: the request of a dependency is an expression'
        new webpack.ContextReplacementPlugin(
          // fixes WARNING Critical dependency: the request of a dependency is an expression
          /(.+)?angular(\\|\/)core(.+)?/,
          path.join(__dirname, 'src'), // location of your src
          {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
          // fixes WARNING Critical dependency: the request of a dependency is an expression
          /(.+)?express(\\|\/)(.+)?/,
          path.join(__dirname, 'src'),
          {}
        )
      ]
    }
