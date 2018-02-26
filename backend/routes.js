const api = require('./controllers/api');

module.exports =(app)=>{
    app.get('/', api.wishesDrawn);
    
}
