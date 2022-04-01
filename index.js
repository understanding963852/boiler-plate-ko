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


app.post('/register',(req,res)=>{
    //회원가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

