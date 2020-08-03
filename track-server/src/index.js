require('./models/User')
require('./models/Track');


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoute')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = "mongodb+srv://admin:q1w2e3r4@cluster0.apygm.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });

mongoose.connection.on('connected', () => {
      console.log('Mongo Connected')
  })
mongoose.connection.on('error', (err) => {
     console.log("Error", err);
 })


app.get('/', requireAuth, (req, res) => {
    res.send(`your email: ${req.user.email}`)
})




app.listen(3000, () => {
    console.log('listen on PORT 3000')
})