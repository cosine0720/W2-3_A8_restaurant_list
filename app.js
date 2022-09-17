const express = require('express')
const port = 3000

const app = express()

app.get('/',(req, res) => {
  res.send('讚的啦')
})

app.listen(port,() => {
  console.log(`This app is opening on http://localhost:${port}`)
})