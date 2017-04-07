var express = require('express');
var app = express();
var router = express.Router();
router.get('/',function (req,res) {
	res.send("Hellow cluster world");
});
app.use("/",router);
app.listen (3000);