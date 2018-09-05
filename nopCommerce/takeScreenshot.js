let fs = require('fs');

exports.writeScreenShot = function(data, filename){
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}