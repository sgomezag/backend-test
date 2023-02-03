const db = require('mongoose');
db.set('strictQuery', false);

function connectDataBase(url){
    db.connect(url, (errorConn) =>{
        if (errorConn) {
            return console.log(errorConn)
        }
        console.log('[db] Successfully connected')
    })
}

module.exports = connectDataBase;