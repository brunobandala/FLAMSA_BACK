'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Rutas
*/

var createRoute = async function(req,res){
    sails.log("starting createRoutes method");
    var Routes = req.body;
    var response = await RoutesService.createRoute(Routes);
    return res.json(response);
    sails.log("createRoutes method finished....");
};

var getRoute = async function(req,res){
    
    sails.log("starting getRoutes method");
    var RoutesId = req.param("RouteId");
    var Routes   = null;

    RoutesService.readRoute(RoutesId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getRoutes method finished");
};

var getAllRoutes = async function(req,res){
    var routes = await RoutesService.getAllRoutes();
    return res.json(routes);
}

module.exports = {
    "createRoute" : createRoute,
    "getRoute"    : getRoute,
    "getAllRoutes" : getAllRoutes
};