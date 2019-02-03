'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Rutas
*/

var createRoutes = async function(req,res){
    sails.log("starting createRoutes method");
    var Routes = req.body;

    if(Routes.name === undefined){
        return res.badRequest("businessName is required");
    }
    if(Routes.origin === undefined){
        return res.badRequest("RFC is required");
    }
    if(Routes.destination === undefined){
        return res.badRequest("fiscalAddress is required");
    }
    if(Routes.distance === undefined){
        return res.badRequest("personalContact is required");
    }

    var response = await RoutesService.createRoutes(Routes);

    return res.json(response);
    sails.log("createRoutes method finished....");
};

var getRoutes = async function(req,res){
    
    sails.log("starting getRoutes method");
    var RoutesId = req.param("RoutesId");
    var Routes   = null;

    RoutesService.readRoutes(RoutesId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getRoutes method finished");
};

module.exports = {
    "createRoutes" : createRoutes,
    "getRoutes"    : getRoutes
};