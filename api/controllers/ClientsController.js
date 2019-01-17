'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Clientes
*/

var createClient = async function(req,res){
    sails.log("starting createClient method");
    var client = req.body;

    if(client.name === undefined){
       return res.badRequest("username is required");
    }
    if(client.RFC === undefined){
        return res.badRequest("RFC is required");
    }
    if(client.phoneNumber === undefined){
        return res.badRequest("phoneNumber is required");
    }
    if(client.email === undefined){
        return res.badRequest("email is required");
    }
    
    var response = await ClientService.createClient(client);

    return res.json(response);
    sails.log("createClient method finished....");
};

var getClient = async function(req,res){
    sails.log("starting getClient method");
    var clientId = req.param("clientId");
    var client   = null;

    ClientService.readClient(clientId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getClient method finished");
};

module.exports = {
    "createClient" : createClient,
    "getClient" : getClient
};