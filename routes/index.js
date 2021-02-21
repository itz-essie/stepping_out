const router = require("express").Router()
const db = require("../models")

router.get("/", (req, res) => {
    res.render("index")
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

module.exports = router;