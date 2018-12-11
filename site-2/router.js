const handlers = require('./handlers');
const router =(request,response) => {
    if (request.url === '/') {
        handlers.homeHandler(request, response);
    }
};
module.exports=router;
