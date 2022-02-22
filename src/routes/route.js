const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

//1. This API will fetch all movies from array
router.get('/movies', function (req, res) {
    res.send('["Ruposh", "Tadap", "Shiddat", "Shershaah", "Tanhaji", "War", "Ludo"]')
});


//2. This API will fetch all movie by indexId from array
router.get('/movies/:movieId', function (req, res) {
    mov1 = ["Ruposh","Tadap","Shiddat","Shershaah","Tanhaji","War","Ludo"]
    let value = req.params.movieId;
    if (value>mov1.length-1) {
        res.send(`'Movie doesnt  exist'`)
    }
    else {
        res.send(mov1[value])
    }
});


//4. This API will fetch all movies from array all objects
router.get('/films', function (req, res) {
    res.send( [ {id: 1, name: "The Shining"}, {id: 2, name: "Incendies"}, {id: 3,name: "Rang de Basanti"}, {id: 4, name:"Spider Man"}, {id: 5, name: "Dhoom"}, {id: 6, name: "Don"} ] )
});


//5. This API will fetch all movies from array of objects by indexId
router.get('/films/:filmId', function (req, res) {
    let mov2 = [ {id: 1, name: '"The Shining"'}, {id: 2, name: '"Incendies"'}, {id: 3,name: '"Rang de Basanti"'}, {id: 4,name: '"Spider Man"'}, {id: 5, name: '"Dhoom"'}, {id: 6, name: '"Don"'}]
    let value = req.params.filmId;
    let found = false;
    for (i = 0; i<mov2.length; i++) {
        if (mov2[i].id==value) {
            found = true;
            res.send(mov2[i])
            break;
        }
    }
    if (found == false) {
        res.send(`'Movie doesnt exists'`)
    }
});

module.exports = router;
