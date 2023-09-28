const express= require("express");
const path = require("path");
const app=express();
app.engine('pug', require('pug').__express)
app.use('/shri',express.static('shri'))
const port=80;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get("/one",(req,res)=>{
    res.status(200).render('one',{title:'hey shrii',mess:'hey shri gud morning'});
});

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
});