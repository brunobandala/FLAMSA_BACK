'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Ping
*/

var ping = async function(req,res){
    sails.log("starting ping method");
    var pong = await Ping.create({uuid:sails.config.globals.UUID()}).fetch();
    res.json(pong);
    sails.log("ping method finished.... PONG!");
}

module.exports = {
    "ping" : ping
}