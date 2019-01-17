'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Contratos
*/

var createContract = async function(contract){
    sails.log("starting createContract method");
    var response = await Contract.create(contract).fetch();
    return response;
    sails.log("createContract method finished!....");
};

var readContract = async function(contractId){
    sails.log("starting getContract method");
    var contract = await Contract.findOne({id : contractId});
    if(!contract){
        throw new Error("invalid contractId");
    }else{
        return contract;
    }
    sails.log("getContract finished");
};

var updateContract = async function(contractId, data){
    sails.log("starting updateContract method");
    var contract = await Contract.update({id:contractId}).set(data);
    sails.log("updateContract method finished!....");
};

var deleteContract = async function(contractId){
    sails.log("starting deleteContract method");
    var contract = await Contract.destroyOne({id:contractId});
    sails.log("deleteContract finished");

};

module.exports = {
    "createContract" : createContract,
    "readContract" : readContract,
    "updateContract" : updateContract,
    "deleteContract" : deleteContract
};+
3