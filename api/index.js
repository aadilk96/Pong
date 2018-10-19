var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/getFriends', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/newUser', function(req, res) {
    User.create(req)
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);