const express = require('express')
const app = express()
const port = 6000

const moogoose=require('mongoose')
moogoose.connect('mongodb+srv://suuneee:jws963852@boilerplate.gamqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    //useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

