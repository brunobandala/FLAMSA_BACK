'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Tramos
*/

var createStretch = async function(req,res){
    sails.log("starting createStretchs method");
    var stretchs = req.body;
    var response = await StretchService.createStretch(stretchs);
    return res.json(response);
    sails.log("createStretchs method finished....");
};

var getStretch = async function(req,res){
    
    sails.log("starting getStretchs method");
    var stretchsId = req.param("StretchId");
    var stretchs   = null;

    StretchService.readStretch(stretchsId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getStretchs method finished");
};

var getAllStretchs = async function(req,res){
    var stretchs = await StretchService.getAllStretchs();
    return res.json(stretchs);
}

module.exports = {
    "createStretch" : createStretch,
    "getStretch"    : getStretch,
    "getAllStretchs" : getAllStretchs
};