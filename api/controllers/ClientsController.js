'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Clientes
*/

var getAllClients = async function(req,res){
    var response = await ClientService.getAllClients();
    var formatedClients = [];

    for(var index in response){
        var client = {};
        client.id = response[index].id;
        client.name = response[index].businessName;
        formatedClients[index] = client;
    }

    return res.json(formatedClients);
}

var createClient = async function(req,res){
    sails.log("starting createClient method");
    var client = req.body;    
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
    "getClient" : getClient,
    "getAllClients" : getAllClients
};