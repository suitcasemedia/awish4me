const api = require('./controllers/api');
const path = require('path')

module.exports =(app)=>{
    app.get('/drawnwishes', api.wishesDrawn);

    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    })
    
}


