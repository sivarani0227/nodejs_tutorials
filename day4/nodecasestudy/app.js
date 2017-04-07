// Level 2 : post form and connect to Mongodb with mongoose and 
//register new user

// npm install body-parser --save
// install mongo  and mongoose 
// (npm install mongoose  --save)
// run   >mongod       to run database server on 27017 before running app2

// load the modules

var express=require('express');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var session = require('client-sessions');
// configure model 

var bcrypt = require('bcryptjs');

var csurf = require('csurf');


var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;// for creating Primary key
var User=mongoose.model('User', new Schema({
  id:           ObjectId,
  firstName:    { type: String},
  lastName:     { type: String},
  email:{type: String,
   required: 'Email is required.', unique: true },
  password:     { type: String} 
}));



// connect to express web server
var app=express();
// configure template engine used by express
app.set('view engine','ejs');

app.locals.pretty=true;// will display nicely formatted html in view page source of browser

// connect to mongo database using mongoose
mongoose.connect('mongodb://localhost/testdb');

app.use(session({
    cookieName : 'session',
    secret:'323232323232323232',
    duration : 3 * 60 * 100,
    activeDuration : 6 * 60 * 100
}));

// configure middleware
app.use(bodyParser.urlencoded({extended:true})); // for form post

app.use(csurf());
//...............................................................
//configure route
app.get('/',function (req,res){
    res.render('index.ejs');
});

app.get('/register',function(req,res){

    res.render('register.ejs');
});

app.post('/register',function(req,res){
    //res.json(req.body);
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    var user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password: hash
    });
    user.save(function(err){
        if(err){
            var error='something bad happend...Try again ';
            if(err.code===11000){//unique for email
            error="Sorry.. email is already existing";
            }
            res.render('register.ejs');
        } else{
            res.redirect('/dashboard');
            }
    });
});// end of post

app.get('/login',function(req,res){
    res.render('login.ejs' , {csrfToken: req.csrfToken()})
   // res.render('login.ejs');
});

// email : murthy@yahoo.com   password : welcome  in db
app.post('/login',function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(!user){
            res.render('login.ejs',
                {error:'Invalid email or passwor111d'});
        } else {
            if(bcrypt.compareSync(req.body.password,user.password)){
                req.session.user = user;
                res.redirect('/dashboard');
            } else{
                res.render('login.ejs',
                    {error:'invalid email or password'});
            }
        }

    })
});

app.get('/dashboard',function(req,res){
       if(req.session && req.session.user){
        User.findOne({email: req.session.email} , function(err, user) {
            if(!user){
                req.session.reset();
                res.redirect('/login');
             }else{
                res.locals.user = user;
                res.render('dashboard.ejs');   
            };
        });

       }else{
        res.redirect('/login');
       }

    res.render('dashboard.ejs');
});
app.get('/logout',function (req,res){
    req.session.reset();    
    res.redirect('/');
})
app.listen(3000);
console.log("server running on localhost:3000");

// now run  localhost:3000 , click register link 
//and fill all the details
// open new command prompt, start mongo  command line process
//   >use testdb
//   > show collections  
//   > db.users.find()  // observe new record added succesffully - great