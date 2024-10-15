const express = require('express');

const port = 1212;

const app = express();


app.set('view engine','ejs');

app.use(express.urlencoded());

const path =require('path');

app.use('/',express.static(path.join(__dirname,'/public')));



app.get('/',(req,res)=>{
    return res.render('index')
})
app.get('/chart',(req,res)=>{
    return res.render('chart')
})
app.get('/widget',(req,res)=>{
    return res.render('widget')
})
app.get('/table',(req,res)=>{
    return res.render('table')
})
app.get('/fullwidth',(req,res)=>{
    return res.render('fullwidth')
})
app.get('/button',(req,res)=>{
    return res.render('button')
})
app.get('/elements',(req,res)=>{
    return res.render('elements')
})
app.get('/form_basic',(req,res)=>{
    return res.render('form_basic')
})
app.get('/form_wizard',(req,res)=>{
    return res.render('form_wizard')
})
app.get('/icon_material',(req,res)=>{
    return res.render('icon_material')
})
app.get('/icon_fontawesome',(req,res)=>{
    return res.render('icon_fontawesome')
})
app.get('/index2',(req,res)=>{
    return res.render('index2')
})
app.get('/index2',(req,res)=>{
    return res.render('index2')
})
app.get('/pages_gallery',(req,res)=>{
    return res.render('pages_gallery')
})
app.get('/pages_calendar',(req,res)=>{
    return res.render('pages_calendar')
})
app.get('/pages_invoice',(req,res)=>{
    return res.render('pages_invoice')
})
app.get('/pages_chat',(req,res)=>{
    return res.render('pages_chat')
})
app.get('/authentication_login',(req,res)=>{
    return res.render('authentication_login')
})
app.get('/authentication_register',(req,res)=>{
    return res.render('authentication_register')
})
app.get('/error_403',(req,res)=>{
    return res.render('error_403')
})
app.get('/error_404',(req,res)=>{
    return res.render('error_404')
})
app.get('/error_405',(req,res)=>{
    return res.render('error_405')
})
app.get('/error_500',(req,res)=>{
    return res.render('error_500')
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
        
    }
    console.log(`surver is run:${port}`);
    
})


