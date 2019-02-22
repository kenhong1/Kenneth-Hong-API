var express = require('express');
var db = require("./models");
var app = express();

app.use(express.urlencoded({extended: false}));

//find all
app.get('/cars', function(req,res) {
    db.cars.findAll().then(function(car) {
        res.json(car);
        
    });
});

//created
app.post('/cars', function(req, res) {
    db.cars.create({
        brand: req.body.brand,
        model: req.body.model,
        year:  parseInt(req.body.year),
    }).then(function(car) {
        res.json(car);
    });
});

//id
app.get('/cars/:id', function(req, res){
    db.cars.findById(parseInt(req.params.id)).then(function(car){
        res.json(car); 
    })
})


//delete
app.delete("/cars/:id", function(req, res){
    db.cars.destroy({
        where:{
            id: req.params.id
        }
    }).then(function(cars){
        res.redirect("/cars")
        
    })
})

//update
app.put("/cars/:id", function(req, res){
    db.cars.update({
        brand: req.body.brand,
        model: req.body.model,
        year:  parseInt(req.body.year),
    },{
        where: {
            id:req.params.id
        }

    }).then(function(car){
        res.redirect("/cars/");
    });
});

//edit 
app.get("/cars/:id:edit", function(req, res){
    db.cars.findById(parseInt(req.params.id)).then(function(car){
        res.render("cars/edit", {car})
    });
});







app.listen(3000);