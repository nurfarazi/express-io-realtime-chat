app = require('express.io')();
app.http().io();

// Broadcast the new visitor event on ready route.
app.io.route('ready', function (req) {
    //req.io.broadcast('new visitor');

    req.io.emit('talk', {
        message: 'io event from an io route on the server'
    });
});



// Send client html.
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 7000);

console.log('running');