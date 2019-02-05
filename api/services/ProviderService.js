'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Proveedores
*/

var createProvider = async function(provider){
    sails.log("starting createProvider method");
    var response = await Provider.create(provider).fetch();
    return response;
    sails.log("createProvider method finished!....");
};

var readProvider = async function(providerId){
    sails.log("starting getProvider method");
    var provider = await Provider.findOne({id : providerId});
    if(!provider){
        throw new Error("invalid ProviderId");
    }else{
        return provider;
    }
    sails.log("getProvider finished");
};

var getAllProviders = async function(){
    return await Provider.find({select: ['businessName']});
}

var updateProvider = async function(providerId, data){
    sails.log("starting updateProvider method");
    var provider = await Provider.update({id:providerId}).set(data);
    sails.log("updateProvider method finished!....");
};

var deleteProvider = async function(providerId){
    sails.log("starting deleteProvider method");
    var provider = await Provider.destroyOne({id:providerId});
    sails.log("deleteProvider finished");

}

module.exports = {
    "createProvider" : createProvider,
    "readProvider"   : readProvider,
    "updateProvider" : updateProvider,
    "deleteProvider" : deleteProvider,
    "getAllProviders"  : getAllProviders
};