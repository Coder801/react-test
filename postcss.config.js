module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnext': {},
    'autoprefixer': {
      browsers: [
        'last 3 versions',
        'iOS >= 7',
        'Android >= 4',
        'Explorer >= 11',
        'ExplorerMobile >= 11'
      ],
      cascade: false
    },
    'cssnano': {}
  }
}
