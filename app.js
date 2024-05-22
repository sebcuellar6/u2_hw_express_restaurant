const express = require('express')
const cors = require('cors')
const desserts = require('./controllers/desserts.js')
const entrees = require('./controllers/entrees.js')
const appetizers = require('./controllers/appetizers.js')
const PORT = process.env.PORT || 3001


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, ()=> {
    console.log(`listening at port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send("working")
})

app.get('/desserts', desserts.getDesserts)

app.get('/desserts/name/:name', desserts.getDessertByName)

app.get('/desserts/vegan', desserts.getVeganDessert)

app.get('/entrees', entrees.getEntrees)

app.get('/entrees/id/:id', entrees.getEntreeIndex)

app.get('/entrees/name/:name', entrees.getEntreeByName)

app.get('/entrees/vegan', entrees.getVeganEntree)

app.get('/appetizers', appetizers.getAppetizer)

app.get('/appetizers/id/:id', appetizers.getAppetizerIndex)

app.get('/appetizers/name/:name', appetizers.getAppetizerByName)

app.get('/appetizers/vegan', appetizers.getVeganAppetizer)