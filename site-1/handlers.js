const fs = require('fs');
const path = require('path');
const querystring=require('querystring');


const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, file) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(file);
    });
};



module.exports = {homeHandler};
