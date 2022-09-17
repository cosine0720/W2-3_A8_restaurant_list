const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public')) // 使用css靜態檔案！！！

// 首頁：瀏覽全部餐廳
app.get('/',(req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// 瀏覽特定餐廳資訊
app.get('/restaurants/:restaurant_id',(req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)  
  res.render('show', { restaurant })
  // const restaurant_id = req.params.restaurant_id
  // res.render('show', { restaurant: restaurantList.results[restaurant_id - 1] })
})

// 搜尋功能
app.get('/search',(req, res) => {
  // 搜尋餐廳名稱關鍵字 || 餐廳種類關鍵字
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants, keyword })
})

app.listen(port,() => {
  console.log(`This app is opening on http://localhost:${port}`)
})