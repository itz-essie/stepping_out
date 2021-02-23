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
    db.Posts.create(req.body)
    .then(posts => {
        res.sendStatus(201)
    })
    .catch((error) => {
        res.send(error)
    })
})

module.exports = router;