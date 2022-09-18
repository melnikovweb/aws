const express = require('express')
const next = require('next')
const vhost = require('vhost')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const mainServer = express()
  const designServer = express()
  const videoServer = express()

  designServer.get('/', (req, res) => {
    return app.render(req, res, '/design', req.query)
  })
  designServer.get('/*', (req, res) => {
    return app.render(req, res, `/design${req.path}`, req.query)
  })
  designServer.all('*', (req, res) => {
    return handle(req, res)
  })

  videoServer.get('/', (req, res) => {
    return app.render(req, res, '/video', req.query)
  })
  videoServer.get('/*', (req, res) => {
    return app.render(req, res, `/video${req.path}`, req.query)
  })
  videoServer.all('*', (req, res) => {
    return handle(req, res)
  })

  mainServer.use(
    vhost(dev ? 'design.localhost' : 'design.binerals.com', designServer),
  )
  mainServer.use(
    vhost(dev ? 'video.localhost' : 'video.binerals.com', videoServer),
  )
  mainServer.all('*', (req, res) => {
    return handle(req, res)
  })
  mainServer.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
