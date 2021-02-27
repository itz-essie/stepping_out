const router = require("express").Router()
const db = require("../models")
const express = require('express');
const formidable = require('formidable');
const app = express();
const { Op } = require("sequelize");

const postsWithNextRowCheck = posts => posts.map((post, index) => {
    post["next_row"] = (index % 2 === 0)
    return post
})

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/foodrink", (req, res) => {
    res.render("FoodDrink")
})

router.get("/entertainment", (req, res) => res.render("entertainment"))

router.get("/sports", (req, res) => {
    res.render("sports")
})

router.get("/outdoors", (req, res) => {
    res.render("outdoors")
})

router.get("/virtual", (req, res) => {
    res.render("virtual")
})

router.get("/api/posts", (req, res) => {
    db.Posts.findAll().then( dbdump => {
        res.json(dbdump);
    })
})

router.get("/foodrink", (req, res) => {
    db.Posts.findAll({
        where: {
            activity_category: {
                [Op.eq]: 'Food_Drink'
            }
        },
        raw : true
    }).then(posts => res.render("FoodDrink", { posts: postsWithNextRowCheck(posts) }))
    .catch(() => res.redirect("/"))
})

router.get("/sports", (req, res) => {
   db.post.findAll({
       where: {
           activity_category: "Sports",
       },
   }).then((dbPost) => res.json(dbPost));
});

router.get("/virtual", (req, res) => {
    db.post.findAll({
        where: {
            activity_category: "Virtual",
        },
    }).then((dbPost) => res.json(dbPost));
 });

 router.get("/entertainment", (req, res) => {
    db.post.findAll({
        where: {
            activity_category: "Entertainment",
        },
    }).then((dbPost) => res.json(dbPost));
 });

router.get("/outdoors", (req, res) => {
    db.post.findAll({
        where: {
            activity_category: "Outdoors & Recreation",
        },
    }).then((dbPost) => res.json(dbPost));
 });

router.get("/submission", (req, res) => res.render("submission"))

router.get("/signup", (req, res) => {
    res.render("signup")
})
router.post("/api/signup", (req, res) => {
    db.Users.create(req.body)
        .then(user => {
            res.redirect("/login")
        })
        .catch(() => {
            res.redirect("/signup")
        })
})

router.post("/newEvent", (req, res) =>{
    console.log(req.body)
    db.Posts.create({
        author_name: req.body.author_name,
        author_email: req.body.author_email,
        activity_category: req.body.activity_category,
        activity_name: req.body.activity_name,
        activity_description: req.body.activity_description,
        rating: req.body.rating,
        cost: req.body.cost,
        city: req.body.city,
        state_code: req.body.state_code
    })
    .then(posts => {
        res.sendStatus(201)
    })
    .catch((error) => {
        res.send(error)
    })
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/jumbo.handlebars');
  });
   
  app.post('/', (req, res) => { 
    var form = new formidable.IncomingForm();
   
    form.parse(req)

    form.on('fileBegin', function (name, file) {
        file.path= __dirname + '/uploads/' + file.name
    })

    form.on('file', function(name, file) {
        console.log("Uploaded file" + file.name)
    })

    res.sendFile(__dirname + '/jumbo.handlebars')

})

module.exports = router;