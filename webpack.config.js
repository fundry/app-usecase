{
  test: /\.svg$/,
  rules: [ {
    oneOf: [ {
      resourceQuery: /^\?vue-template/,
      loader: 'vue-template-loader',
      options: {
        functional: true
      }
    }, {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]?[hash]'
      }
    } ]
  }, {
    loader: 'svgo-loader',
    options: {
      plugins: [
        { removeViewBox: false },
        { removeDimensions: true }
      ]
    }
  } ]
}