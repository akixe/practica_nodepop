'use strict';

var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({ 
    nombre: String, 
    email: String, 
    clave: String 
})

usuarioSchema.statics.clearAll = function(next){
    Usuario.remove({}, function(err, message){
        if(err){
            next(err);
            return;
        }
        next(null, message);
        return;
    })
}


var Usuario = mongoose.model('Usuario', usuarioSchema);




