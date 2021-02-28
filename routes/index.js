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
    }).then(posts => {
        res.render("FoodDrink", { posts: postsWithNextRowCheck(posts) })
})
    .catch(() => res.redirect("/"))
})

router.get("/sports", (req, res) => {
    db.Posts.findAll({
        where: {
            activity_category: {
                [Op.eq]: 'Sports'
            }
        },
        raw : true
    }).then(posts => {
        res.render("sports", { posts: postsWithNextRowCheck(posts) })
})
    .catch(() => res.redirect("/"))
})

router.get("/virtual", (req, res) => {
    db.Posts.findAll({
        where: {
            activity_category: {
                [Op.eq]: 'Virtual'
            }
        },
        raw : true
    }).then(posts => {
        res.render("virtual", { posts: postsWithNextRowCheck(posts) })
})
    .catch(() => res.redirect("/"))
})

router.get("/entertainment", (req, res) => {
    db.Posts.findAll({
        where: {
            activity_category: {
                [Op.eq]: 'Entertainment'
            }
        },
        raw : true
    }).then(posts => {
        res.render("entertainment", { posts: postsWithNextRowCheck(posts) })
})
    .catch(() => res.redirect("/"))
})

router.get("/outdoors", (req, res) => {
    db.Posts.findAll({
        where: {
            activity_category: {
                [Op.eq]: 'Outdoors_Recreation'
            }
        },
        raw : true
    }).then(posts => {
        res.render("outdoors", { posts: postsWithNextRowCheck(posts) })
})
    .catch(() => res.redirect("/"))
})

router.get("/submission", (req, res) => res.render("submission"))

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
        state_code: req.body.state_code,
        input_insider: req.body.input_insider,
        input_photos: req.body.input_photos,
    })
    .then(posts => {
        res.sendStatus(201)
    })
    .catch((error) => {
        res.send(error)
    })
})


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/jumbo.handlebars');
//   });
   
//   app.post('/', (req, res) => { 
//     var form = new formidable.IncomingForm();
   
//     form.parse(req)

//     form.on('fileBegin', function (name, file) {
//         file.path= __dirname + '/uploads/' + file.name
//     })

//     form.on('file', function(name, file) {
//         console.log("Uploaded file" + file.name)
//     })

//     res.sendFile(__dirname + '/jumbo.handlebars')

// })

// app.post('/api/upload', (req, res, next) => { 
    
//     const form = new formidable.IncomingForm(); 
//     form.parse(req, function(err, fields, files){ 
  
//         var oldPath = files.profilePic.path; 
//         var newPath = path.join(__dirname, 'uploads') 
//                 + '/'+files.profilePic.name 
//         var rawData = fs.readFileSync(oldPath) 
      
//         fs.writeFile(newPath, rawData, function(err){ 
//             if(err) console.log(err) 
//             return res.send("Successfully uploaded") 
//         }) 
//   }) 
// }); 

module.exports = router;