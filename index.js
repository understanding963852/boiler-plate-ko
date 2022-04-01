const express = require('express')
const app = express()
const port = 6060
const bodyParser=require('body-parser');
 
const config=require('./config/key');
const {User}=require("./models/User");

//아래두개 client에서 저장된 회원가입을 서버에서 분석해서 가져올수 있게 한다.//application/x-www-form-urlencoded이렇게 생긴 데이타를 가져와서 분석한다
app.use(bodyParser.urlencoded({extended:true}));
////application/json 데이타를 가져와서 분석한다
app.use(bodyParser.json());


const moogoose=require('mongoose')
moogoose.connect(config.mongoURI,{
   // useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!!!!')
})


app.post('/register',(req,res)=>{
    //회원가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다
    //req.body에는 json형식으로 자료가 들어있다.그 이후는 bodyParser가 있어서 할수있게 해 준다
    const user = new User(req.body) 
//user.save()는 mongoDB오는 메서드이다.
   user.save((err,userInfo)=>{
       //성공하지 못했다고 json형식으로 메세지를 보낸다
       if(err) return res.json({success:false,err})
       return res.status(200).json({
           success:true
       })
   })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

