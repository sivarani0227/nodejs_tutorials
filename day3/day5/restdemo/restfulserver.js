var express =require('express');
    var app = express();

    app.get('/',function(req,res){
        console.log("Got a get requrest from the homepage");
        res.json({'status':'Welcome to RESTful world'})
    })

    app.get('/greet', function(req,res){
        console.log("Got a greet GET request from client");
        res.json({'msg': 'Welcome to Node RESTFUL world'})
    })

    app.post('/',function(req,res) {
        console.log("Got a Post request for the Homepage");
        res.json({'status':'Posted new datato server'})
    })

    app.delete('/deluser',function(req,res){
        console.log("Got a Delete request from /del_user");
        res.json({'status':'deleted data from server'})
    })

    app.get('/listusers', function(req,res){
        console.log("Got a GET request for /list_user");
        res.json({users:['Sriram','Rama','Sudeep']})
    })

    app.get('/ab*cd', function(req,res){
        console.log("Got a GET request from /ab*cd");
        res.send('Page Pattern Match');
    })

    var server = app.listen(8080, function(){
        console.log("Express Server running at 8080");
    })