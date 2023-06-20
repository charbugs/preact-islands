import path from 'path'
import express from 'express'
import compression from 'compression'
import { renderDocument } from './Document'


const app = express()
app.use(compression())
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))


app.get('/', (req, res) => {
  const html = renderDocument()
  res.send(html)
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
