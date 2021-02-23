const router = require("express").Router()
const db = require("../models")

router.get("/", (req, res) => {
    res.render("index",{greeting: "Hello World- testing this out"})
})

router.get("/foodrink", (req, res) => {
    res.render("FoodDrink")
})

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
    db.Posts.create(req.body{
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

module.exports = router;