const express = require('express');
const router = express.Router();

/* express */
router.get('/', function(req, res){
    res.send('this is home page');
});

router.get('/contact', function(req, res){
    console.log(req.query);
    res.send('this is contact page');
});

router.get('/profile/:id', function(req,res){
    // res.send(`you requested to see a profile id of ${req.params.id}`);
    var data = {
        name: req.params.id,
        age: 21,
        hobbies: [
            'main',
            'makan',
            'tidur'
        ]
    }
    
    res.render('profile', {person: data});
});

module.exports = router;