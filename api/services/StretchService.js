'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Tramos
*/
var createStretch = async function(stretch){
    sails.log("starting createStretch method");
    var response = await Stretches.create(stretch).fetch();
    return response;
    sails.log("createStretch method finished!....");
};

var readStretch = async function(stretchId){
    sails.log("starting getStretch method");
    var stretch = await Stretches.findOne({id : stretchId});
    if(!stretch){
        throw new Error("invalid StretchId");
    }else{
        return stretch;
    }
    sails.log("getStretch finished");
};

var getAllStretchs = async function(){
    return await Stretches.find({select: ['name']});
}

var updateStretch = async function(stretchId, data){
    sails.log("starting updateStretch method");
    var stretch = await Stretches.update({id:stretchId}).set(data);
    sails.log("updateStretch method finished!....");
};

var deleteStretch = async function(stretchId){
    sails.log("starting deleteStretch method");
    var stretch = await Stretches.destroyOne({id:stretchId});
    sails.log("deleteStretch finished");

};

module.exports = {
    "createStretch" : createStretch,
    "readStretch" : readStretch,
    "updateStretch" : updateStretch,
    "deleteStretch" : deleteStretch,
    "getAllStretchs" : getAllStretchs
};