'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Rutas
*/

var createRoute = async function(route){
    sails.log("starting createRoute method");
    var response = await Route.create(route).fetch();
    return response;
    sails.log("createRoute method finished!....");
};

var readRoute = async function(routeId){
    sails.log("starting getRoute method");
    var route = await Route.findOne({id : routeId});
    if(!route){
        throw new Error("invalid RouteId");
    }else{
        return route;
    }
    sails.log("getRoute finished");
};

var getAllRoutes = async function(){
    return await Route.find({select: ['name']});
}

var updateRoute = async function(routeId, data){
    sails.log("starting updateRoute method");
    var route = await Route.update({id:routeId}).set(data);
    sails.log("updateRoute method finished!....");
};

var deleteRoute = async function(routeId){
    sails.log("starting deleteRoute method");
    var route = await Route.destroyOne({id:routeId});
    sails.log("deleteRoute finished");

};

module.exports = {
    "createRoute" : createRoute,
    "readRoute" : readRoute,
    "updateRoute" : updateRoute,
    "deleteRoute" : deleteRoute,
    "getAllRoutes" : getAllRoutes
};