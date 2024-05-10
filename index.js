const express = require ('express');
var cors = require('cors');
const app = express();
const port = 8242;


app.use(cors())

const user =[
    {
        firstname : 'apurba',
        lastname :'das',
        email : 'apurbadassourav@gmail.com',
        pass : '123456'
    },
    {
        firstname : 'sourav',
        lastname :'das',
        email : 'dasapurbasourav@gmail.com',
        pass : '123456'
    },
    {
        firstname : 'apurbadiu',
        lastname :'das',
        email : 'apurba15-11850@diu.edu.bd',
        pass : '123456'
    },
    {
        firstname : 'boltu',
        lastname :'das',
        email : 'apurbad317@gmail.com',
        pass : '123456'
    },
    {
        firstname : 'tamim',
        lastname :'iqabal',
        email : 'tmaimiqabal@gmail.com',
        pass : '123456'
    }
]


app.get('/',(req,res)=>{
res.send('this is landing page')
})
app.get('/user',(req,res)=>{
res.send(user)
})
 app.listen(port, ()=>{
    console.log(`this ${port} is working` )
 })