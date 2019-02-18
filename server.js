const express=require('express');

var app=express();


var PORT=3000;

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/users',(req,res)=>{


    let usr=[{'name':'Kay','age':10},
    {'name':'thi','age':9},
    {'name':'thi','age':5}
    ];
    res.send(usr);
})

app.get('/group',(req,res)=>{

res.status(500).json({'error':'request error'});
})

app.listen(PORT,()=>{
    console.log(`listen on ${PORT}`)
})