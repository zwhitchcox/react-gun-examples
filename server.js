import express from 'express'
import http from 'http'
import Gun from 'gun'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config'

const app = express()
const server = http.createServer(app)

Gun({file: 'data.json', web: server})

const compiler = webpack(config)

const devMiddleware = WebpackDevMiddleware(compiler)

app.use(Gun.serve)
app.use(devMiddleware)

server.listen(4000)
