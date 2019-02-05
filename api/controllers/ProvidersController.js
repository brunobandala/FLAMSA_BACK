'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Proveedores
*/

var createProvider = async function(req,res){
    sails.log("starting createProvider method");
    var provider = req.body;

    if(provider.businessName === undefined){
        return res.badRequest("businessName is required");
    }
    if(provider.RFC === undefined){
        return res.badRequest("RFC is required");
    }
    if(provider.fiscalAddress === undefined){
        return res.badRequest("fiscalAddress is required");
    }
    if(provider.personalContact === undefined){
        return res.badRequest("personalContact is required");
    }
    if(provider.contact === undefined){
        return res.badRequest("contact is required");
    }

    var response = await ProviderService.createProvider(provider);

    return res.json(response);
    sails.log("createProvider method finished....");
};

var getProvider = async function(req,res){
    
    sails.log("starting getProvider method");
    var providerId = req.param("providerId");
    var provider   = null;

    ProviderService.readProvider(providerId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getProvider method finished");
};

var getAllProviders = async function(req, res){
    var providers = await ProviderService.getAllProviders();
    var formatedProviders = [];

    for(var index in providers){
        var provider = {};
        provider.id = providers[index].id;
        provider.name = providers[index].businessName;
        formatedProviders[index] = provider;
    }
    return res.json(formatedProviders);
}

module.exports = {
    "createProvider" : createProvider,
    "getProvider"    : getProvider,
    "getAllProviders" : getAllProviders
};