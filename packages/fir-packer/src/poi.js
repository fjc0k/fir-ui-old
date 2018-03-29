const poi = require('poi')

module.exports = options => {
  poi({
    mode: 'development',
    ...options
  })
    .dev()
    .then(
      ({ server, host, port }) => {
        console.log(server, host, port)
      },
      console.error
    )
}
