const fs = require('fs');

exports.removeEnding = function(req, res, next) {
    var publicdir = __dirname + '/../../public/';
    if (req.path.indexOf('.') === -1) {
        var file = publicdir + req.path + '.html';
        if(fs.existsSync(file))
            req.url += ".html";

        next();
    } else {
        next();
    }
};

exports.handler = function(req, res, next){
    res.status(404);

    res.format({
        html: function(){
            res.render('404', { url: req.url })
        },
        json: function(){
            res.json({ error: 404, msg: "Not Found" })
        },
        default: function(){
            res.type('txt').send("Not found")
        }
    });
}