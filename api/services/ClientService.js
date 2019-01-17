'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Clientes
*/

var createClient = async function(client){
    sails.log("starting createClient method");
    var response = await Client.create(client).fetch();
    return response;
    sails.log("createClient method finished!....");
};

var readClient = async function(clientId){
    sails.log("starting getClient method");
    var client = await Client.findOne({id : clientId});
    if(!client){
        throw new Error("invalid clientId");
    }else{
        return client;
    }
    sails.log("getClient finished");
};

var updateClient = async function(clientId, data){
    sails.log("starting updateClient method");
    var client = await Client.update({id:clientId}).set(data);
    sails.log("updateClient method finished!....");
};

var deleteClient = async function(clientId){
    sails.log("starting deleteClient method");
    var client = await Client.destroyOne({id:clientId});
    sails.log("deleteClient finished");

}

module.exports = {
    "createClient" : createClient,
    "readClient" : readClient,
    "updateClient" : updateClient,
    "deleteClient" : deleteClient
};