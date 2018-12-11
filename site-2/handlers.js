const fs = require('fs');
const path = require('path');
const querystring=require('querystring');


const homeHandler = (req, res) => {
    console.log("SOMEONE REQUESTED!");
};



module.exports = {homeHandler};
