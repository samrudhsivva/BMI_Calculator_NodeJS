var express=require("express");
var bodyParser=require("body-parser");
var myModule=require("./myModule.js");
var app=express();
app.use(bodyParser.urlencoded({extended:true})); //mandatory statement for using body-parser... 
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});



app.get("/author",function(req,res)
{
    var k=myModule.moduleAuthor();
    res.send("hii "+k);
    console.log("request from client to server",req);
    console.log(" Author details available!!");
});

app.post("/",function(req,res)
{
   // res.send("helloooooooo");
   var num1=req.body.num1;
   var num2=req.body.num2;
   var solution=Number(num1)+Number(num2);
    res.send("The sum of num1 and num2 is "+solution);
});

app.get("/bmiCalculator", function(req,res)
{
    
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    //console.log(typeof(req.body.height));
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
    var BMI=weight/(height*height);
    res.send("Your BMI is "+BMI+ typeof(height));
    
});

app.listen(3000,function()
{
    console.log("listening at port 3000");
}
);
