const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public')) // 使用css靜態檔案！！！

app.get('/',(req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id',(req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)  
  res.render('show', { restaurant })
  // const restaurant_id = req.params.restaurant_id
  // res.render('show', { restaurant: restaurantList.results[restaurant_id - 1] })
})

app.listen(port,() => {
  console.log(`This app is opening on http://localhost:${port}`)
})