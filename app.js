const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public')) // 使用css靜態檔案！！！

app.get('/',(req, res) => {
  res.render('index')
})

app.listen(port,() => {
  console.log(`This app is opening on http://localhost:${port}`)
})