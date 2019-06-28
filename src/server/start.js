import server from '../server'

server
  .listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
  })
  .on('error', err => {
    console.error(`Error:\r\n${err}`)
  })
