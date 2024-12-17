const express = require('express')
const mongoose = require('mongoose')
const productRouter =require('./router/productRouter')
const userRouter = require('./router/userRouters')

const app = express()
app.use(express.static('public'));
app.use(express.json())

app.use(productRouter)
app.use(userRouter)


mongoose.connect('mongodb://127.0.0.1:27017/Qyosk')
.then(()=>{
    app.listen(3000, () => {
        console.log('server localhost :3000')
    })

})
.catch(err => console.log(err));



